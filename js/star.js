(function() {
    function t() {
        i(),
        a()
    }
    function i() {
        document.addEventListener("mousemove", o),
        document.addEventListener("touchmove", e),
        document.addEventListener("touchstart", e),
        window.addEventListener("resize", n)
    }
    function n(t) {
        d = window.innerWidth,
        window.innerHeight
    }
    function e(t) {
        if (t.touches.length > 0) for (var i = 0; i < t.touches.length; i++) s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() * r.length)])
    }
    function o(t) {
        u.x = t.clientX,
        u.y = t.clientY,
        s(u.x, u.y, r[Math.floor(Math.random() * r.length)])
    }
    function s(t, i, n) {
        var e = new l;
        e.init(t, i, n),
        f.push(e)
    }
    function h() {
        for (var t = 0; t < f.length; t++) f[t].update();
        for (t = f.length - 1; t >= 0; t--) f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1))
    }
    function a() {
        requestAnimationFrame(a),
        h()
    }
    function l() {
        this.character = "*",
        this.lifeSpan = 100, // 就靠它调整速度啦
        this.initialStyles = {
            position: "fixed",
            top: "0",
            display: "block",
            pointerEvents: "none",
            "z-index": "10000000", // 覆盖在最上层显示
            fontSize: "20px",
            "will-change": "transform"
        },
        this.init = function(t, i, n) {
            this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() * 1.25), // 横向发散的程度
                y: 1
            },
            this.position = {
                x: t - 5, // 出小星星相对于光标尖尖的位置
                y: i - 15
            },
            this.initialStyles.color = n,
            console.log(n),
            this.element = document.createElement("span"),
            this.element.innerHTML = this.character,
            c(this.element, this.initialStyles),
            this.update(),
            document.body.appendChild(this.element)
        },
        this.update = function() {
            this.position.x += this.velocity.x,
            this.position.y += this.velocity.y,
            this.lifeSpan--,
            this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 120 + ")"
        },
        this.die = function() {
            this.element.parentNode.removeChild(this.element)
        }
    }
    function c(t, i) {
        for (var n in i) t.style[n] = i[n]
    }
    var r = ["#D61C59", "#E7D84B", "#1B8798"],
    d = window.innerWidth,
    u = (window.innerHeight, {
        x: d / 2,
        y: d / 2
    }),
    f = [];
    t()
})();
const Live = document.createElement('script');
Live.src = "https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js";
Live.onload = function () {
    L2Dwidget.init({
        "model": {
            jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
            "scale": 1
        },
        "display": {
            "position": "right",
            "width": document.body.clientWidth * 0.07,
            "height": document.body.clientWidth * 0.14,
            "hOffset": 0,
            "vOffset": -30
        },
        "mobile": {
            "show": false,
            "scale": 0.7
        },
        "react": {
            "opacityDefault": 0.7,
            "opacityOnHover": 0.2
        }
    });
};
document.body.appendChild(Live);

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});

