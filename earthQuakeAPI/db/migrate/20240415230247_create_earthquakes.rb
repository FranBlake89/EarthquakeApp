class CreateEarthquakes < ActiveRecord::Migration[7.1]
  def change
    create_table :earthquakes do |t|
      t.string :external_id
      t.decimal :magnitude
      t.string :place
      t.datetime :time
      t.string :url
      t.boolean :tsunami
      t.string :mag_type
      t.string :title
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
