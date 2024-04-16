#Fetchinh earthquake data from https://earthquake.usgs.gov
# Model:: 
=begin
{
  type: "FeatureCollection",
  metadata: {
    generated: Long Integer,
    url: String,
    title: String,
    api: String,
    count: Integer,
    status: Integer
  },
  bbox: [
    minimum longitude,
    minimum latitude,
    minimum depth,
    maximum longitude,
    maximum latitude,
    maximum depth
  ],
  features: [
    {
      type: "Feature",
      properties: {
        mag: Decimal,
        place: String,
        time: Long Integer,
        updated: Long Integer,
        tz: Integer,
        url: String,
        detail: String,
        felt:Integer,
        cdi: Decimal,
        mmi: Decimal,
        alert: String,
        status: String,
        tsunami: Integer,
        sig:Integer,
        net: String,
        code: String,
        ids: String,
        sources: String,
        types: String,
        nst: Integer,
        dmin: Decimal,
        rms: Decimal,
        gap: Decimal,
        magType: String,
        type: String
      },
      geometry: {
        type: "Point",
        coordinates: [
          longitude,
          latitude,
          depth
        ]
      },
      id: String
    },
    …
  ]
}
=end

require 'net/http'
require 'uri'

namespace :fetch do
    desc "Fetch earthquakes from USGS and persist the result"
    task earthquake_data: :environment do 
        # Define the URI for the API endpoint
        uri = URI('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
        # Create a new Net::HTTP object with the URI host and port
        http = Net::HTTP.new(uri.host, uri.port)
        # Set use_ssl to true
        http.use_ssl = true
        # Set verify_mode to OpenSSL::SSL::VERIFY_PEER
        http.verify_mode = OpenSSL::SSL::VERIFY_PEER
        # Send a GET request to the URI
        request = Net::HTTP::Get.new(uri)
        response = http.request(request)
        # Checking Output the response body
       # puts response.body

        data = JSON.parse(response.body)
        # Checking Output data
        puts data


        data['features'].each do |feature|
            properties = feature['properties']
            geometry = feature['geometry']['coordinates']
            # filtre for null values
            # skip if are null
            next if properties['title'].nil? || properties['url'].nil? || properties['place'].nil? || properties['magType'].nil? || geometry[0].nil? || geometry[1].nil?

            mag = properties['mag']
            latitude = geometry[1]
            longitude = geometry[0]

            next if mag < -1.0 || mag > 10.0 || latitude < -90.0 || latitude > 90.0 || longitude < -180.0 || longitude > 180.0

            Earthquake.find_or_create_by(
                external_id: feature['id'],
                magnitude: mag,
                place: properties['place'],
                time: Time.at(properties['time'] / 1000),
                url: properties['url'],
                tsunami: properties['tsunami'],
                mag_type: properties['magType'],
                title: properties['title'],
                latitude: latitude,
                longitude: longitude
              )
        end
        puts 'Task:: Data fetched and persisted successfully'
    end
end
