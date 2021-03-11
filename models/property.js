const Property = function(data){
    this.buidling_id = data["building_id"].value;
    this.property_title = data["property_title"].value;
    this.property_description = data["lastName"].value;
    this.adress = data["adress"].value;
    this.state = data["state"].value;
    this.country = data["country"].value;
    this.latitude = data["latitude"].value;
    this.latitude = data["logitude"].value;
    this.zip = data["zip"].value;
    this.zoning = data["zoning"].value;
    this.property_type = data["property_type"].value;
    this.property_size = data["property_size"].value;
    this.number_of_bedrooms = data["number_of_bedrooms"].value;
    this.number_of_bathrooms = data["number_of_bathrooms"].value;
    this.number_of_balconies = data["number_of_balconies"].value;
    this.floor = data["floor"].value;
};
    
  module.exports = Property;