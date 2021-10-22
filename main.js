const linkSocialMedia = {
  github: 'afschagas',
  youtube: 'jakelinygracielly'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Bia'
  //userName.textContent = 'Ale'
  for (let li of socilLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  // Pegando dados do JSON
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
      companyName.textContent = data.company
    })
}

getGitHubProfileInfos()
