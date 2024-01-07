<template>
  <div>
    <div class="container">
      <header class="header">
        <h1>
          명함 관리 페이지
        </h1>
      </header>
      <main class="main">
        명함을 관리하는 페이지입니다. 여기에 명함 목록이 표시됩니다.
    </main>
      <article class="article">명함</article>
    </div>
    <footer class="footer">
      <p>
        ⓒ 2023 My Business Cards
      </p>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header{
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 300px;
  background-color: rgb(11, 24, 214);
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 20px;
}
.main{
  margin: 10px;
}
.footer{
    height: 50px;
    background-color: lightgray;
    color: black;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
</style>