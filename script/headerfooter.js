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
            text-decoration-line:none;
        }
        nav a:hover{
            color:brown;
        }
        .nav__walk{
            color: rgb(99, 64, 0);
            font-weight: 600;
        }
        .nav__link{
            display: flex;
            gap: 30px;
        }
        nav-mobile{
            display : none;
        }
        .mobile-menu-icon{
            display : none;
        }
        .display-block{
            display:block;
        }
        @media(max-width:767px){
            .pc-nav{display:none;}
            nav-mobile{
                width:50%;
                height:100%;
                background-color : rgb(235, 227, 216);
                position : fixed;
                top : 0;
                right:0;
            }
            .menus{
                display : flex;
                flex-direction : column;
                text-align: center;
                font-size :24px;
            }
            .menus div{
                padding:20px 0;
                //border-bottom:black 1px solid;
            }
            .menus a{
                color:rgb(159, 109, 29);
            }
            .menus a:hover{
                color:brown;
                text-decoration:none;
            }
            .menu-active{
                background-color : white;
                pointer-events:none;
                cursor:default;
            }
            .mobile-menu-icon{
                display : block;
                cursor:pointer;
            }
            .mobile-menu-icon-open{
                cursor:pointer;
                padding:30px
            }

        }
        </style>
        <nav>
            <a href="/index.html"><img class="nav__logo" src="/img/logo8.png" alt="강아지로고"></a>
            <div class="nav__link">
                <a class="pc-nav" href="/html/aboutHappy.html" class="nav__link__about-happy">About HAPPY</a>
                <a class="pc-nav" href="/html/aboutMaltese.html" class="nav__link__about-maltese">About MALTESE</a>
                <a class="pc-nav" href="/html/friends.html" class="nav__link__friends">Friends</a>
            </div>
            <a href="" class="pc-nav" class="nav__walk">함께 산책하기</a>
            <div class="mobile-menu-icon"><i class="fa fa-bars"></i></div>
        </nav>
        
        <nav-mobile>
            <div class="mobile-menu-icon-open"><i class="fa fa-bars"></i></div>
            <div class="menus">
                <div class="menu__home"><a href="/">Home</a></div>
                <div class="menu__aboutHappy"><a href="/html/aboutHappy.html">About HAPPY</a></div>
                <div class="menu__aboutMaltese"><a href="/html/aboutMaltese.html">About MALTESE</a></div>
                <div class="menu__freinds"><a href="/html/friends.html">Friends</a></div>
            </div>
        </nav-mobile>
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