Por supuesto, aquí tienes el contenido formateado como un archivo Markdown:

```markdown
# EarthquakeApp

This is a technical test for Frogmi.

## Objectives:

Develop an application in Ruby or a Ruby-based framework that includes a task to obtain and persist data and an API exposing two endpoints to be queried from an external client. Additionally, develop a simple web page in HTML5 and JavaScript to query the two mentioned endpoints. Bonus points for utilizing any of the following frameworks: EmberJS, React, AngularJS, or VueJS.

### 1. Back-end Development:

The development entails creating an application in Ruby or a Ruby-based framework to retrieve and deliver seismic data worldwide. Essentially, it should include a task to obtain and persist data and two endpoints accessible to an external client.

#### 1.1 Data Acquisition from Feed and Persistence:

Develop a task to retrieve seismic data from the USGS website (earthquake.usgs.gov). This feed provides data in GeoJSON format used for geographic data structures, for example, a Feature (a seismic event). Don't worry, GeoJSON uses the JSON standard ;)

Specifically, retrieve information from the "Past 30 days" feed (earthquake.usgs.gov/earthqu... from the features collection. Specifically, for each element:

- `id`
- `properties.mag`
- `properties.place`
- `properties.time`
- `properties.url`
- `properties.tsunami`
- `properties.magType`
- `properties.title`
- `geometry.coordinates[0]` (longitude)
- `geometry.coordinates[1]` (latitude)

Persist this data in a database. Considerations:
- The values of `title`, `url`, `place`, `magType`, and coordinates cannot be null. Otherwise, do not persist.
- Validate ranges for magnitude [-1.0, 10.0], latitude [-90.0, 90.0], and longitude: [-180.0, 180.0].
- Do not duplicate records if the task is launched more than once.

#### 1.2 Provide Data Through a REST API:

Two endpoints are expected to expose and modify data:

##### 1.2.1 Endpoint 1: GET list of features

Considerations:
- Results must be exposed following this format:

```json
{
  "data": [
    {
      "id": Integer,
      "type": "feature",
      "attributes": {
        "external_id": String,
        "magnitude": Decimal,
        "place": String,
        "time": String,
        "tsunami": Boolean,
        "mag_type": String,
        "title": String,
        "coordinates": {
          "longitude": Decimal,
          "latitude": Decimal
        }
      },
      "links": {
        "external_url": String
      }
    }
  ],
  "pagination": {
    "current_page": Integer,
    "total": Integer,
    "per_page": Integer
  }
}
```

- Data must be filterable by:
  - `mag_type`. Using filters[mag_type]. Can be more than one. Possible values: md, ml, ms, mw, me, mi, mb, mlg.
  - `page`
  - `per_page`. Validate per_page <= 1000

##### 1.2.2 Endpoint 2: POST create a comment associated with a feature

This endpoint should receive a payload considering the following information to create a comment related to the feature:
Considerations:
- A feature can have one or more comments, but only one is created at a time (per request).
- The payload must contain a `feature_id`: Integer referring to the internal `id` of a feature and a `body`: Text with the entered comment.
- Each received comment must be persisted.
- Validate that there is content in the body of the new comment before being persisted.

Example curl commands:

```bash
curl -X GET \
'127.0.0.1:3000/api/features...' \
-H 'Content-Type: application/vnd.api+json' \
-H 'cache-control: no-cache'
```

```bash
curl -X GET \
'127.0.0.1:3000/api/features...' \
-H 'Content-Type: application/vnd.api+json' \
-H 'cache-control: no-cache'
```

```bash
curl --request POST \
--url 127.0.0.1:3000/api/features...' \
--header 'content-type: application/json' \
--data '{"body": "This is a comment" }'
```
```
```
