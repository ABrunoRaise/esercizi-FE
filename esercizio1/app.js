var app = new function(){
    this.userView = document.getElementById("userList");

    this.users = [
        new User('Andrea')
    ];

    this.showList = function(){
        data = ''
        this.users.forEach(function(user,i) {
        data += '<div class = "userDiv">';
        data += '<text>';
        data +=  user.name ;
        data += '</text>';
        data += '<button onclick="app.Edit(' + i + ')">Edit</button>';
        data += '<button onclick="app.Delete(' + i + ')">Delete</button>';
        data += '</div>';
        });
        return this.userView.innerHTML = data;
    };

    this.Add = function () {
        elName = document.getElementById('add-name');
        // Get the value
        
        if (elName.value) {
          var userToAdd = new User(elName.value)
          // Add the new value
          this.users.push(userToAdd);
          // Reset input value
          elName.value = '';
          // Dislay the new list
          this.showList();
        }
    };

    this.Edit = function (item) {
        var elName = document.getElementById('edit-name');
        // Display value in the field
        var userToUpdate = this.users[item];
        elName.value = userToUpdate.name;
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
    
        document.getElementById('saveEdit').onsubmit = function() {
          // Get value
          var userUpdated = new User(elName.value);
    
          if (userUpdated) {
            // Edit value
            self.users.splice(item, 1, userUpdated);
            // Display the new list
            self.showList();
            // Hide fields
            CloseInput();
          }
        }
    };
    
      this.Delete = function (item) {
        // Delete the current row
        this.users.splice(item, 1);
        // Display the new list
        this.showList();
      };
}
app.showList();

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}