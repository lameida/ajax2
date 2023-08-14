$(document).ready(function() {
    $("#searchButton").click(function() {
        var username = $("#usernameInput").val();
        getUserInfo(username);
    });
  });
  
  function getUserInfo(username) {
    $.ajax({
        url: "https://api.github.com/users/" + username,
        method: "GET",
        
        success: function(response) {
            $("#avatar").attr("src", response.avatar_url);
            $("#nome").text(response.nome);
            $("#repos").text(response.public_repos);
            $("#seguidores").text(response.followers);
            $("#seguindo").text(response.following);
            $("#profileLink").attr("href", response.html_url);
        },
        error: function(error) {
            console.error("Ocorreu um erro, tente mais tarde:", error);
        }
    });
  }