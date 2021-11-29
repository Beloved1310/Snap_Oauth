window.snapKitInit = () => {
    snap.loginkit.mountButton("login-button", {
      clientId: "6657a894-7ddc-49a4-902e-94240dbb6577",
      redirectURI: "http://localhost:3000",
      scopeList: [
        "user.display_name",
        "user.bitmoji.avatar",
      ],
      handleResponseCallback: () => {
        snap.loginkit.fetchUserInfo().then(data => {
            console.log(data)
            console.log(data.data.me.externalId)
            const externalId = data.data.me.externalId
            const storage = window.sessionStorage;
            storage.clear();
            storage.setItem('exernalId', externalId);
         
          document.getElementById("login-button").classList.add("hidden")
          document.getElementById("profile").classList.remove("hidden")

          document.getElementById("picture").src = data["data"]["me"]["bitmoji"]["avatar"]
          document.getElementById("welcome").innerHTML = "Welcome, " + data["data"]["me"]["displayName"] + "!"
        })
      },
    })
  }

