class Api::FeaturesController < ApplicationController
  def index
    page = params.fetch(:page, 1).to_i
    per_page = params.fetch(:per_page, 10).to_i
    features = Earthquake.limit(per_page).offset( (page - 1) * per_page )
    serialized_features = features.map{ |feature| serialize_feature(feature)}

    render json:{
      data: serialized_features,
      pagination:{
        current_page: page,
        total: features.count,
        per_page: per_page
      }
    }
  end

  def serialize_feature(feature)
    {
      id: feature.id,
      type: 'feature',
      attributes: {
        external_id: feature.external_id,
        magnitude: feature.magnitude,
        place: feature.place,
        time: feature.time,
        tsunami: feature.tsunami,
        mag_type: feature.mag_type,
        title: feature.title,
        coodinates:{
          longitude: feature.longitude,
          latitude: feature.latitude
        }
      },
      links: {
        external_url: feature.url
      }
    }
  end
  
  def show
    feature = Earthquake.find(params[:id])
    comments = feature.comments.map{ |comment| serialize_comment(comment) }

    render json: {
      data: serialize_feature(feature),
      comments: comments 
    }
  end

  private
  
  def serialize_comment(comment)
    {
      id: comment.id,
      body: comment.body,
      created_at: comment.created_at
    }
  end 
end
