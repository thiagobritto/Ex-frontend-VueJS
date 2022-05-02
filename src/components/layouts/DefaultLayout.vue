<template>
    <div class="default-layout">
        <nav class="nav">
            <h1 class="logo">@Thomic</h1>
        </nav>
        <main class="main">
            <aside class="aside">
                <div class="image">
                    <img src="@/assets/images/user.jpg" alt="">
                </div>
                <h3 class="name">Jane</h3>
                <ul class="list">
                    <li>
                        <router-link to="#">
                            <span class="material-icons">local_offer</span>
                            <span>Vender</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#">
                            <span class="material-icons">arrow_drop_up</span>
                            <span>Cadastro</span>
                        </router-link>
                        <ul class="list-droppable">
                            <li>
                                <a href="">
                                    <span class="material-icons">person_add</span>
                                    <span>Cliente</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span class="material-icons">add</span>
                                    <span>Produto</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <section class="section">
                <slot></slot>
            </section>
        </main>
        <footer class="footer">
            footer
        </footer>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout'
}
</script>

<style scoped>
.nav{
    display: flex;
    align-items: center;
    height: var(--heigth--nav);
    width: 100%;
    background: var(--bk--nav);
}
.logo{
    color: var(--color--logo);
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -1.5px;
    margin-left: 15px;
}
.main{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: calc(100vh - calc(var(--heigth--nav) + var(--heigth--footer)));
}
.aside{
    height: 100%;
    background: var(--bk--aside);
    width: var(--width--aside);
}
.image{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px auto;
    margin-bottom: 0;
}
.image img{
    height: 100%;
}
.name{
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
}
.list{
    list-style: none;
}
.list a{
    display: flex;
    align-items: center;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    transition: .4s;
    transition-property: background;
}
.list a span:last-child{
    margin-left: 10px;
}
.list a:hover{
    background: var(--bk--link--hover);
}
.list-droppable{
    border-left: 5px solid #fff;
    color: #fff;
    list-style: none;
}
.section{
    height: 100%;
    width: calc(100% - var(--width--aside));
}
.footer{
    height: var(--heigth--footer);
    background: var(--bk--footer);
    color: #fff;
}
</style>