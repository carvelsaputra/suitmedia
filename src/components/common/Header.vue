<template>
  <header>
    <div class="container">
      <div class="header-left">
        <p class="logo">Forum Anak IT</p>
      </div>
      <div class="header-left logo">
        <input type="text" />
      </div>
      <nav class="header-right">
        <a href="#">Categories</a>
        <a href="#" class="login">Log in</a>
        <a href="#">Register</a>
      </nav>
    </div>
  </header>
</template>
<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Lucida Grande";
}

a {
  text-decoration: none;
}

.clear {
  clear: left;
}

.container {
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}

.btn:hover {
  opacity: 1;
}

.fa {
  margin-right: 5px;
}

header {
  height: 65px;
  width: 100%;
  background-color: #71695f;
  position: fixed;
  top: 0;
  z-index: 10;
}

.logo {
  font-family: "PT_Sans-Web-Bold";
  font-size: 24px;
  color: white;
  width: 150px;
  margin-top: 20px;
}

.header-left {
  float: left;
}

.header-right {
  float: right;
  margin-right: -25px;
}

.header-right a {
  line-height: 65px;
  font-family: "PT_Sans-Web-Bold";
  padding: 0 25px;
  color: white;
  display: block;
  float: left;
  transition: all 0.5s;
}

.header-right a:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.menu-icon {
  color: white;
  float: right;
  font-size: 25px;
  padding: 21px 0;
  display: none;
}

.heading h2 {
  font-weight: normal;
}
</style>
