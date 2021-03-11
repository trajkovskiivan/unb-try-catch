const User = function(data){
    this.firstName = data["firstName"].value;
    this.lastName = data["lastName"].value;
    this.companyName = data["companyName"].value;
    this.email = data["email"].value;
    this.phone = data["phone"].value;
    this.date_joined = new Date().getTime();
    this.reffered_by = data["reffered_by"].value;
};
    
module.exports = User;