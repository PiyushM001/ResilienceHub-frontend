/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/App.js",
"./src/components/home.js",
"./src/components/chatpage.js",
"./src/components/chatcomp.js",
"./src/components/makeTeam.js",
"./src/components/post.js",
"./src/components/postpost.js",
"./src/components/othersaboutprofile.js",
"./src/components/signup.js",

"./src/components/profile_page_common.js",
"./src/components/profile_post_page.js",

    "./src/components/footer.js",
    "./src/components/header.js",
    "./src/components/tournament.js",
    "./src/components/tournament-page.js",
    "./src/components/profile_page.js",
    "./src/components/profile_page_games.js",
    "./src/components/profile_page_posts.js",
    "./src/components/players_page.js",
    "./src/components/player.js",
    "./src/components/profile_form.js",
    "./src/components/login.js",
    "./src/components/aftersignupform.js",
    "./src/components/Team_page.js",
    "./src/components/followcomp.js",
    "./src/components/followers.js",

    "./src/components/ownprofilepage.js",
    "./src/components/ownprofilepage2.js",
    "./src/components/ownprofilepage3.js",

    "./src/components/notifycomp.js",
    "./src/components/notification.js",
    "./src/components/Skillform.js",
    "./src/components/post.js",
    "./src/components/post_page.js",
    "./src/components/teamnameform.js",
    "./src/components/teamcomp.js",








  ],
   theme: {
    extend: {
      fontFamily: {
        'mochiy-pop': ['Mochiy Pop One', 'sans-serif'],
        'teachers': ['Teachers', 'sans-serif'],

      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

