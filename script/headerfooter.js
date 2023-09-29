class Header extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <style>
        header-component{
            position : sticky;
            top : 0;
            z-index:1;
        }
        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 80px;
            background-color:wheat;

        }
        
        .nav__logo{
            width: 80px;
            height: 60px;
        }
        nav a{
            color: black;
            font-size: 20px;
        }
        .nav__walk{
            color: rgb(99, 64, 0);
            font-weight: 600;
        }
        .nav__link{
            display: flex;
            gap: 30px;
        }
        </style>
        <nav>
            <a href="/index.html"><img class="nav__logo" src="/img/logo8.png" alt="강아지로고"></a>
            <div class="nav__link">
                <a href="/html/aboutHappy.html" class="nav__link__about-happy">About HAPPY</a>
                <a href="/html/aboutMaltese.html" class="nav__link__about-maltese">About MALTESE</a>
                <a href="/html/friends.html" class="nav__link__friends">Friends</a>
            </div>
            <a href="" class="nav__walk">함께 산책하기</a>
        </nav>
    
        `
    }
}

customElements.define("header-component",Header);

class Footer extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <style>
        footer{
            height: 100px;
            background-color: black;
            color: rgb(202, 201, 201);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 40px;
            font-size: 16px;
        }
        .footer__git{
            width: 40px;
        }
        </style>
        <footer>
            <div class="footer__company">@JieunCorporation</div>
            <div class="footer__contact">CONTACT US<br>wiseag@naver.com</div>
            <div class="footer__git"><a href="https://github.com/wise-Ag/HappyProject" target="_new"><img src="/img/github.svg" alt=""></a></div>
        </footer>
        `
    }
}
customElements.define("footer-component",Footer);