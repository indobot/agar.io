/*
 This extension (Agar.io Powerups) is developed by (C) Szymon Marczak.
 If You will copy this extension or copy any feature from this extension I will be forced to take legal action aganist You.

 By copying this extension You cause to delete this extension from Chrom Web Store.
 You can only modify this extension for personal use.
 */

! function(c, e) {
	function fc() {
		tTR = 0, myCells = 1, botsWalking = !1, freezeBots = !1, Oa = !0, p.core.init(), qb(), setInterval(qb, 18e4), O = Pa = document.getElementById("canvas"), f = O.getContext("2d"), O.onmousedown = function(e) {
			if (rb) {
				var t = e.clientX - (5 + q / 5 / 2),
					n = e.clientY - (5 + q / 5 / 2);
				if (Math.sqrt(t * t + n * n) <= q / 5 / 2) return void Qa()
			}
			Y = 1 * e.clientX, Z = 1 * e.clientY, Ra(), qa()
		}, O.onmousemove = function(e) {
			ra = !1, Y = 1 * e.clientX, Z = 1 * e.clientY, Ra()
		}, O.onmouseup = function() {}, /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", sb, !1) : document.body.onmousewheel = sb;
		var t = !1,
			n = !1,
			o = !1;
		c.onkeydown = function(e) {
			32 != e.keyCode || t || ("nick" != e.target.id && e.preventDefault(), Qa(), t = !0), 81 != e.keyCode || n || (P(18), n = !0), 87 != e.keyCode || o || (tb(), o = !0), 69 == e.keyCode && splitBots(), 82 == e.keyCode && ejectMassBots(), 67 == e.keyCode && delete lDPos, 27 == e.keyCode && (e.preventDefault(), sa(300)), "undefined" == typeof ws || "client" != ws && ws.readyState != ws.OPEN || (84 == e.keyCode && ("client" == ws ? freezeBots ? freezeBots = !1 : freezeBots = !0 : ws.send(JSON.stringify({
				action: "freeze"
			}))), 70 == e.keyCode && ("client" == ws ? fastSplitClientBots() : ws.send(JSON.stringify({
				action: "fastSplit"
			}))), 65 == e.keyCode && (botsWalking ? botsWalking = !1 : botsWalking = !0, "client" == ws ? (e.xWalk = Ba - u, e.yWalk = Ca - v, e.cnX = Number(localStorage.x), e.cnY = Number(localStorage.y)) : ws.send(JSON.stringify({
				action: "walk",
				xWalk: Ba - u,
				yWalk: Ca - v
			}))))
		}, c.onkeyup = function(e) {
			32 == e.keyCode && (t = !1), 87 == e.keyCode && (o = !1), 81 == e.keyCode && n && (P(19), n = !1)
		}, c.onblur = function() {
			P(19), o = n = t = !1
		}, c.onresize = ub, c.requestAnimationFrame(vb), setInterval(qa, 40), D && e("#region").val(D), wb(), ta(e("#region").val()), 0 == Sa && D && Q(), sa(0), ub(), c.location.hash && 6 <= c.location.hash.length && xb(c.location.hash)
	}

	function drawMinimap() {
		minimap = e(_0xfbfe[0])[0], xPos = Number(localStorage[_0xfbfe[1]]), yPos = Number(localStorage[_0xfbfe[2]]), xRatio = 0 > Ba ? (xPos + Da) / (2 * Da) : xPos / Da, yRatio = 0 > Ca ? (yPos + Ea) / (2 * Ea) : yPos / Ea, xMap = xRatio * minimap[_0xfbfe[3]], yMap = yRatio * minimap[_0xfbfe[4]], ctx = minimap[_0xfbfe[6]](_0xfbfe[5]), ctx[_0xfbfe[7]](0, 0, minimap[_0xfbfe[3]], minimap[_0xfbfe[4]]), ctx[_0xfbfe[8]] = .2, ctx[_0xfbfe[9]] = _0xfbfe[10], ctx[_0xfbfe[11]](0, 0, minimap[_0xfbfe[3]], minimap[_0xfbfe[4]]), ctx[_0xfbfe[8]] = 1, ctx[_0xfbfe[12]] = 1, ctx[_0xfbfe[13]](), ctx[_0xfbfe[14]](0, yMap), ctx[_0xfbfe[15]](minimap[_0xfbfe[3]], yMap), ctx[_0xfbfe[14]](xMap, 0), ctx[_0xfbfe[15]](xMap, minimap[_0xfbfe[4]]), ctx[_0xfbfe[16]](), ctx[_0xfbfe[17]] = _0xfbfe[18], ctx[_0xfbfe[19]](), l[_0xfbfe[20]] > 0 && (ctx[_0xfbfe[13]](), ctx[_0xfbfe[9]] = _0xfbfe[21], ctx[_0xfbfe[23]](xMap, yMap, 7, 0, 2 * Math[_0xfbfe[22]]), ctx[_0xfbfe[24]](), ctx[_0xfbfe[16]](), ctx[_0xfbfe[24]]()), typeof lDPos == _0xfbfe[25] && (xRatio = 0 > Ba ? (Number(lDPos[_0xfbfe[27]](_0xfbfe[26])[0]) + Da) / (2 * Da) : Number(lDPos[_0xfbfe[27]](_0xfbfe[26])[0]) / Da, yRatio = 0 > Ca ? (Number(lDPos[_0xfbfe[27]](_0xfbfe[26])[1]) + Ea) / (2 * Ea) : Number(lDPos[_0xfbfe[27]](_0xfbfe[26])[1]) / Ea, ctx[_0xfbfe[28]] = _0xfbfe[29], ctx[_0xfbfe[9]] = _0xfbfe[30], ctx[_0xfbfe[31]](_0xfbfe[1], xRatio * minimap[_0xfbfe[3]] - 4, yRatio * minimap[_0xfbfe[4]] + 4))
	}

	function sb(e) {
		e.preventDefault(), R *= Math.pow(.9, e.wheelDelta / -120 || e.detail || 0), (eZE() ? .1 : 1) > R && (R = eZE() ? .1 : 1), R > 4 / h && (R = 4 / h)
	}

	function gc() {
		if (.4 > h) ga = null;
		else {
			for (var e = Number.POSITIVE_INFINITY, t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, o = Number.NEGATIVE_INFINITY, a = 0; a < z.length; a++) {
				var i = z[a];
				!i.O() || i.T || 20 >= i.size * h || (e = Math.min(i.x - i.size, e), t = Math.min(i.y - i.size, t), n = Math.max(i.x + i.size, n), o = Math.max(i.y + i.size, o))
			}
			for (ga = hc.init({
				sa: e - 10,
				ta: t - 10,
				qa: n + 10,
				ra: o + 10,
				Da: 2,
				Ea: 4
			}), a = 0; a < z.length; a++)
				if (i = z[a], i.O() && !(20 >= i.size * h))
					for (e = 0; e < i.a.length; ++e) t = i.a[e].x, n = i.a[e].y, w - q / 2 / h > t || x - r / 2 / h > n || t > w + q / 2 / h || n > x + r / 2 / h || ga.na(i.a[e])
		}
	}

	function Ra() {
		sg && fCE() && "" != gCTF() || (ua = (Y - q / 2) / h + w, va = (Z - r / 2) / h + x), localStorage.x = w.toFixed(0), localStorage.y = x.toFixed(0), "undefined" != typeof ws && "client" != ws && ws.readyState == ws.OPEN && ("cell" == jQuery("[name='botsFollow']:checked").val() ? ws.send(JSON.stringify({
			x: localStorage.x,
			y: localStorage.y
		})) : botsWalking || ws.send(JSON.stringify({
			x: ua,
			y: va,
			score: gMM()
		}))), mE() && drawMinimap()
	}

	function qb() {
		null == wa && (wa = {}, e("#region").children().each(function() {
			var t = e(this),
				n = t.val();
			n && (wa[n] = t.text())
		})), e.get(Ta + "info", function(t) {
			var n, o = {};
			for (n in t.regions) {
				var a = n.split(":")[0];
				o[a] = o[a] || 0, o[a] += t.regions[n].numPlayers
			}
			for (n in o) e('#region option[value="' + n + '"]').text(wa[n] + " (" + o[n] + " players)")
		}, "json")
	}

	function yb() {
		e("#adsBottom").hide(), e("#overlays").hide(), e("#stats").hide(), e("#mainPanel").hide(), aa = ha = !1, wb(), c.destroyAd(c.adSlots.aa), c.destroyAd(c.adSlots.ac)
	}

	function ta(t) {
		t && (t == D ? e(".btn-needs-server").prop("disabled", !1) : (e("#region").val() != t && e("#region").val(t), D = c.localStorage.location = t, e(".region-message").hide(), e(".region-message." + t).show(), e(".btn-needs-server").prop("disabled", !1), Oa && Q()))
	}

	function sa(t) {
		ha || aa || (xa ? e(".btn-spectate").prop("disabled", !0) : e(".btn-spectate").prop("disabled", !1), M = null, Ua || (e("#adsBottom").show(), e("#g300x250").hide(), e("#a300x250").show(), e("#g728x90").hide(), e("#a728x90").show()), c.refreshAd(Ua ? c.adSlots.ac : c.adSlots.aa), Ua = !1, 1e3 > t && (y = 1), ha = !0, e("#mainPanel").show(), t > 0 ? e("#overlays").fadeIn(t) : e("#overlays").show())
	}

	function ia(t) {
		e("#helloContainer").attr("data-gamemode", t), ja = t, e("#gamemode").val(t)
	}

	function wb() {
		e("#region").val() ? c.localStorage.location = e("#region").val() : c.localStorage.location && e("#region").val(c.localStorage.location), e("#region").val() ? e("#locationKnown").append(e("#region")) : e("#locationUnknown").append(e("#region"))
	}

	function S(e) {
		return c.i18n[e] || c.i18n_dict.en[e] || e
	}

	function zb() {
		var t = ++Sa;
		console.log("Find " + D + ja), Ab(), e.ajax(Ta + "findServer", {
			error: function() {
				setTimeout(zb, 3e4)
			},
			success: function(e) {
				if (t == Sa) {
					e.alert && alert(e.alert);
					var n = e.ip;
					void 0 != A.la && (n = c.location.hostname + ":" + A.la), Va("ws" + (Wa ? "s" : "") + "://" + n, e.token)
				}
			},
			dataType: "json",
			method: "POST",
			cache: !1,
			crossDomain: !0,
			data: (D + ja || "?") + "\n2200049715"
		})
	}

	function Q() {
		Oa && D && (e("#connecting").show(), zb())
	}

	function Ab() {
		if (t) {
			t.onopen = null, t.onmessage = null, t.onclose = null;
			try {
				t.close()
			} catch (e) {}
			t = null
		}
	}

	function Va(e, n) {
		if (Ab(), J.ip && (e = "ws" + (Wa ? "s" : "") + "://" + J.ip), null != T) {
			var o = T;
			T = function() {
				o(n)
			}
		}
		if (Wa && !A.env_development && !A.env_local) {
			var a = e.split(":");
			e = "wss://ip-" + a[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +a[2]
		}
		E = [], l = [], N = {}, z = [], ba = [], B = [], F = G = null, U = 0, ka = !1, delete lDPos, console.log("Connecting to " + e), jQuery("#serverIP").val(e), jQuery("#token").val(n), tTR = 0, stopBots(), p.cache.sentGameServerLogin = !1, t = new WebSocket(e), t.binaryType = "arraybuffer", t.onopen = function() {
			var e;
			console.log("socket open"), e = V(5), e.setUint8(0, 254), e.setUint32(1, 5, !0), W(e), e = V(5), e.setUint8(0, 255), e.setUint32(1, 2200049715, !0), W(e), e = V(1 + n.length), e.setUint8(0, 80);
			for (var t = 0; t < n.length; ++t) e.setUint8(t + 1, n.charCodeAt(t));
			W(e), "login_info" in p.cache && p.I.M(p.cache.login_info[0], p.cache.login_info[1])
		}, t.onmessage = ic, t.onclose = jc, t.onerror = function() {
			console.log("socket error")
		}
	}

	function V(e) {
		return new DataView(new ArrayBuffer(e))
	}

	function W(e) {
		t.send(e.buffer)
	}

	function jc() {
		ka && (ya = 500), console.log("socket close"), setTimeout(Q, ya), ya *= 2
	}

	function ic(e) {
		kc(new DataView(e.data))
	}

	function kc(e) {
		function t() {
			for (var t = "";;) {
				var o = e.getUint16(n, !0);
				if (n += 2, 0 == o) break;
				t += String.fromCharCode(o)
			}
			return t
		}
		var n = 0;
		switch (240 == e.getUint8(n) && (n += 5), e.getUint8(n++)) {
			case 16:
				lc(e, n);
				break;
			case 17:
				la = e.getFloat32(n, !0), n += 4, ma = e.getFloat32(n, !0), n += 4, na = e.getFloat32(n, !0), n += 4;
				break;
			case 20:
				l = [], E = [];
				break;
			case 21:
				Xa = e.getInt16(n, !0), n += 2, Ya = e.getInt16(n, !0), n += 2, Za || (Za = !0, za = Xa, Aa = Ya);
				break;
			case 32:
				E.push(e.getUint32(n, !0)), n += 4;
				break;
			case 49:
				if (null != G) break;
				var o = e.getUint32(n, !0),
					n = n + 4;
				B = [];
				for (var a = 0; o > a; ++a) {
					var i = e.getUint32(n, !0),
						n = n + 4;
					B.push({
						id: i,
						name: t()
					})
				}
				Bb();
				break;
			case 50:
				for (G = [], o = e.getUint32(n, !0), n += 4, a = 0; o > a; ++a) G.push(e.getFloat32(n, !0)), n += 4;
				Bb();
				break;
			case 64:
				Ba = e.getFloat64(n, !0), n += 8, Ca = e.getFloat64(n, !0), n += 8, Da = e.getFloat64(n, !0), n += 8, Ea = e.getFloat64(n, !0), n += 8, la = (Da + Ba) / 2, ma = (Ea + Ca) / 2, na = 1, 0 == l.length && (w = la, x = ma, h = na), e.byteLength > n && (o = e.getUint32(n, !0), n += 4, Cb = !! (1 & o), $a = t(), c.MC.updateServerVersion($a), console.log("Server version " + $a));
				break;
			case 102:
				o = e.buffer.slice(n), p.core.proxy.forwardProtoMessage(o);
				break;
			case 104:
				c.logout()
		}
	}

	function lc(t, n) {
		function o() {
			for (var e = "";;) {
				var o = t.getUint16(n, !0);
				if (n += 2, 0 == o) break;
				e += String.fromCharCode(o)
			}
			return e
		}

		function a() {
			for (var e = "";;) {
				var o = t.getUint8(n++);
				if (0 == o) break;
				e += String.fromCharCode(o)
			}
			return e
		}
		Db = K = Date.now(), ka || (ka = !0, e("#connecting").hide(), Eb(), T && (T(), T = null)), ab = !1;
		var i = t.getUint16(n, !0);
		n += 2;
		for (var r = 0; i > r; ++r) {
			var s = N[t.getUint32(n, !0)],
				f = N[t.getUint32(n + 4, !0)];
			n += 8, s && f && (f.ba(), f.s = f.x, f.u = f.y, f.o = f.size, f.J = s.x, f.K = s.y, f.g = f.size, f.S = K, mc(s, f))
		}
		for (r = 0; i = t.getUint32(n, !0), n += 4, 0 != i;) {
			++r;
			var u, s = t.getInt32(n, !0);
			n += 4, f = t.getInt32(n, !0), n += 4, u = t.getInt16(n, !0), n += 2;
			var h = t.getUint8(n++),
				g = t.getUint8(n++),
				d = t.getUint8(n++),
				g = nc(h << 16 | g << 8 | d),
				d = t.getUint8(n++),
				b = !! (1 & d),
				p = !! (16 & d),
				m = null;
			2 & d && (n += 4 + t.getUint32(n, !0)), 4 & d && (m = a());
			var _ = o(),
				h = null;
			N.hasOwnProperty(i) ? (h = N[i], h.R(), h.s = h.x, h.u = h.y, h.o = h.size, h.color = g) : (h = new ca(i, s, f, u, g, _), z.push(h), N[i] = h, h.Y = s, h.Aa = f), h.c = b, h.h = p, h.J = s, h.K = f, h.g = u, h.S = K, h.da = d, m && (h.C = m), _ && h.A(_), -1 != E.indexOf(i) && -1 == l.indexOf(h) && (l.push(h), 1 == l.length && (w = h.x, x = h.y, Fb(), document.getElementById("overlays").style.display = "none", C = [], cb = 0, db = l[0].color, xa = !0, Gb = Date.now(), X = eb = fb = 0))
		}
		for (s = t.getUint32(n, !0), n += 4, r = 0; s > r; r++) i = t.getUint32(n, !0), n += 4, h = N[i], null != h && h.ba();
		if (l.length > 0 && myCells != l.length && gMRM() > 34) {
			if (myCells > l.length) return void(myCells = l.length);
			myCells = l.length, tTR = .0233 * gMRM() + 30, "undefined" != typeof checkMergeTime && clearInterval(checkMergeTime), checkMergeTime = setInterval(function() {
				tTR > 0 && tTR--, 0 == tTR && clearInterval(this)
			}, 1e3)
		}
		l.length < 2 && tTR > 0 && (tTR = 0, myCells = 1), ab && 0 == l.length && ("undefined" != typeof checkMergeTime && clearInterval(checkMergeTime), tTR = 0, lDPos = localStorage.x + ", " + localStorage.y), ab && 0 == l.length && "1" != c.storageInfo.userInfo.loggedIn && Hb()
	}

	function qa() {
		if (da()) {
			var e = Y - q / 2,
				t = Z - r / 2;
			64 > e * e + t * t || .01 > Math.abs(Ib - ua) && .01 > Math.abs(Jb - va) || (Ib = ua, Jb = va, e = V(13), e.setUint8(0, 16), e.setInt32(1, ua, !0), e.setInt32(5, va, !0), e.setUint32(9, 0, !0), W(e))
		}
	}

	function Eb() {
		if (da() && ka && null != M) {
			var e = V(1 + 2 * M.length);
			e.setUint8(0, 0);
			for (var t = 0; t < M.length; ++t) e.setUint16(1 + 2 * t, M.charCodeAt(t), !0);
			W(e), M = null
		}
	}

	function Qa() {
		qa(), P(17)
	}

	function tb() {
		qa(), P(21)
	}

	function da() {
		return null != t && t.readyState == t.OPEN
	}

	function P(e) {
		if (da()) {
			var t = V(1);
			t.setUint8(0, e), W(t)
		}
	}

	function ub() {
		q = 1 * c.innerWidth, r = 1 * c.innerHeight, Pa.width = O.width = q, Pa.height = O.height = r;
		var t = e("#helloContainer");
		t.css("transform", "none");
		var n = t.height(),
			o = c.innerHeight;
		0 != n / 2 % 2 && (n++, t.height(n)), n > o / 1.1 ? t.css("transform", "translate(-50%, -50%) scale(" + o / n / 1.1 + ")") : t.css("transform", "translate(-50%, -50%)"), Kb()
	}

	function Lb() {
		var e;
		return e = 1 * Math.max(r / 1080, q / 1920), e *= R
	}

	function oc() {
		if (0 != l.length) {
			for (var e = 0, t = 0; t < l.length; t++) e += l[t].size;
			h = (9 * h + Math.pow(Math.min(64 / e, 1), .4) * Lb()) / 10
		}
	}

	function Kb() {
		var e, t = Date.now();
		if (++pc, Mb && (++Fa, Fa > 180 && (Fa = 0)), K = t, 0 < l.length) {
			oc();
			for (var n = e = 0, o = 0; o < l.length; o++) l[o].R(), e += l[o].x / l.length, n += l[o].y / l.length;
			la = e, ma = n, na = h, w = (w + e) / 2, x = (x + n) / 2
		} else w = (29 * w + la) / 30, x = (29 * x + ma) / 30, h = (9 * h + na * Lb()) / 10;
		for (gc(), Ra(), gb || f.clearRect(0, 0, q, r), gb ? (f.fillStyle = Ga ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.fillRect(0, 0, q, r), f.globalAlpha = 1) : qc(), z.sort(function(e, t) {
			return e.size == t.size ? e.id - t.id : e.size - t.size
		}), f.save(), f.translate(q / 2, r / 2), f.scale(h, h), f.translate(-w, -x), sBE() && dB(f), o = 0; o < ba.length; o++) ba[o].w(f);
		for (o = 0; o < z.length; o++) z[o].w(f);
		if (Za) {
			for (za = (3 * za + Xa) / 4, Aa = (3 * Aa + Ya) / 4, f.save(), f.strokeStyle = "#FFAAAA", f.lineWidth = 10, f.lineCap = "round", f.lineJoin = "round", f.globalAlpha = .5, f.beginPath(), o = 0; o < l.length; o++) f.moveTo(l[o].x, l[o].y), f.lineTo(za, Aa);
			f.stroke(), f.restore()
		}
		f.restore(), F && F.width && f.drawImage(F, q - F.width - 10, 10), U = Math.max(U, Nb()), 0 != U && (null == Ha && (Ha = new Ia(24, "#FFFFFF")), Ha.B(S("score") + ": " + ~~(U / 100)), n = Ha.L(), e = n.width, f.globalAlpha = .2, f.fillStyle = "#000000", f.fillRect(10, r - 10 - 24 - 10, e + 10, 34), f.globalAlpha = 1, f.drawImage(n, 15, r - 10 - 24 - 5)), dT("X: " + localStorage.x + " Y: " + localStorage.y, 8, 8), "undefined" != typeof lDPos && lD && dT("Last died: " + lDPos, 212, 8), "Stop bots" == jQuery('[data-itr="run_bots"]').html() ? dT("Minions: " + bots, 8, 46) : !1, mTE() && tTR > 1 && dT(1 == tTR.length ? "0" : "" + tTR.toFixed(0) + "s", O.width / 2 - 72, 8), rc(), t = Date.now() - t, t > 1e3 / 60 ? L -= .01 : 1e3 / 65 > t && (L += .01), .4 > L && (L = .4), L > 1 && (L = 1), t = K - Ob, !da() || ha || aa ? (y += t / 2e3, y > 1 && (y = 1)) : (y -= t / 300, 0 > y && (y = 0)), y > 0 ? (f.fillStyle = "#000000", Pb ? (f.globalAlpha = y, f.fillRect(0, 0, q, r), I.complete && I.width && (I.width / I.height < q / r ? (t = q, e = I.height * q / I.width) : (t = I.width * r / I.height, e = r), f.drawImage(I, (q - t) / 2, (r - e) / 2, t, e), f.globalAlpha = .5 * y, f.fillRect(0, 0, q, r))) : (f.globalAlpha = .5 * y, f.fillRect(0, 0, q, r)), f.globalAlpha = 1) : Pb = !1, Ob = K
	}

	function dT(e, t, n) {
		button = new Ia(24, "#FFFFFF"), button.B(e);
		var o = button.L(),
			a = o.width,
			i = o.height;
		f.globalAlpha = .2, f.fillStyle = "#000000", f.fillRect(0 + t, i - 28 + n, a + 10, 34), f.globalAlpha = 1, f.drawImage(o, 5 + t, i - 23 + n)
	}

	function dB(e) {
		Ga && (e.strokeStyle = "#FFFFFF"), e.beginPath(), e.moveTo(Ba, Ca), e.lineTo(Da, Ca), e.lineTo(Da, Ea), e.lineTo(Ba, Ea), e.lineTo(Ba, Ca), e.stroke()
	}

	function getGameMode() {
		return e("#gamemode").val()
	}

	function hexToRGB(e) {
		var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		e = e.replace(t, function(e, t, n, o) {
			return t + t + n + n + o + o
		});
		var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
		return n ? {
			r: parseInt(n[1], 16),
			g: parseInt(n[2], 16),
			b: parseInt(n[3], 16)
		} : null
	}

	function qc() {
		if (nGE()) return Ga ? f.fillStyle = "#111111" : f.fillStyle = "#F2FBFF", f.fillRect(0, 0, q, r), f.save(), f.restore(), !1;
		f.fillStyle = Ga ? "#111111" : "#F2FBFF", f.fillRect(0, 0, q, r), f.save(), f.strokeStyle = Ga ? "#AAAAAA" : "#000000", f.globalAlpha = .2 * h;
		for (var e = q / h, t = r / h, n = (-w + e / 2) % 50; e > n; n += 50) f.beginPath(), f.moveTo(n * h - .5, 0), f.lineTo(n * h - .5, t * h), f.stroke();
		for (n = (-x + t / 2) % 50; t > n; n += 50) f.beginPath(), f.moveTo(0, n * h - .5), f.lineTo(e * h, n * h - .5), f.stroke();
		f.restore()
	}

	function rc() {
		if (rb && hb.width) {
			var e = q / 5;
			f.drawImage(hb, 5, 5, e, e)
		}
	}

	function Nb() {
		for (var e = 0, t = 0; t < l.length; t++) e += l[t].g * l[t].g;
		return e
	}

	function Bb() {
		if (F = null, (null != G || 0 != B.length) && (null != G || Ja)) {
			F = document.createElement("canvas");
			var e = F.getContext("2d"),
				t = 60,
				t = null == G ? t + 24 * B.length : t + 180,
				n = Math.min(200, .3 * q) / 200;
			if (F.width = 200 * n, F.height = t * n, e.scale(n, n), e.globalAlpha = .4, e.fillStyle = "#000000", e.fillRect(0, 0, 200, t), e.globalAlpha = 1, e.fillStyle = "#FFFFFF", n = null, n = S("leaderboard"), e.font = "30px Ubuntu", e.fillText(n, 100 - e.measureText(n).width / 2, 40), null == G)
				for (e.font = "20px Ubuntu", t = 0; t < B.length; ++t) n = B[t].name || S("unnamed_cell"), Ja || (n = S("unnamed_cell")), -1 != E.indexOf(B[t].id) ? (l[0].name && (n = l[0].name), e.fillStyle = "#FFAAAA") : e.fillStyle = "#FFFFFF", n = t + 1 + ". " + n, e.fillText(n, 100 - e.measureText(n).width / 2, 70 + 24 * t);
			else
				for (t = n = 0; t < G.length; ++t) {
					var o = n + G[t] * Math.PI * 2;
					e.fillStyle = sc[t + 1], e.beginPath(), e.moveTo(100, 140), e.arc(100, 140, 80, n, o, !1), e.fill(), n = o
				}
		}
	}

	function tc(e) {
		if (null == e || 0 == e.length) return null;
		if ("%" == e[0]) {
			if (!c.MC || !c.MC.getSkinInfo) return null;
			if (e = c.MC.getSkinInfo("skin_" + e.slice(1)), null == e) return null;
			for (e = (+e.color).toString(16); 6 > e.length;) e = "0" + e;
			return "#" + e
		}
		return null
	}

	function Qb(e) {
		if (null == e || 0 == e.length) return null;
		if (!oa.hasOwnProperty(e)) {
			var t = new Image;
			if (":" == e[0]) t.src = e.slice(1);
			else if ("%" == e[0]) {
				if (!c.MC || !c.MC.getSkinInfo) return null;
				var n = c.MC.getSkinInfo("skin_" + e.slice(1));
				if (null == n) return null;
				t.src = c.ASSETS_ROOT + "skins/premium/" + n.url
			}
			oa[e] = t
		}
		return 0 != oa[e].width && oa[e].complete ? oa[e] : null
	}

	function setPremiumSkin(e) {
		if (null == e || 0 == e.length) return null;
		if (!sa.hasOwnProperty(e)) {
			var t = new Image;
			t.src = d.ASSETS_ROOT + "skins/premium/" + e.capitalizeFirstLetter() + ".png", sa[e] = t
		}
		return 0 != sa[e].width && sa[e].complete ? sa[e] : null
	}

	function ib(e, t, n, o, a) {
		this.Z = e, this.x = t, this.y = n, this.f = o, this.b = a
	}

	function ca(e, t, n, o, a, i) {
		this.id = e, this.s = this.x = t, this.u = this.y = n, this.o = this.size = o, this.color = a, this.a = [], this.$(), this.A(i)
	}

	function nc(e) {
		for (e = e.toString(16); 6 > e.length;) e = "0" + e;
		return "#" + e
	}

	function Ia(e, t, n, o) {
		e && (this.v = e), t && (this.U = t), this.W = !! n, o && (this.X = o)
	}

	function uc(e) {
		for (var t, n, o = e.length; o > 0;) n = Math.floor(Math.random() * o), o--, t = e[o], e[o] = e[n], e[n] = t
	}

	function vc() {
		g = Ka
	}

	function Rb(e) {
		g.context = "google" == e ? "google" : "facebook", La()
	}

	function La() {
		c.localStorage.storeObjectInfo = JSON.stringify(g), g = JSON.parse(c.localStorage.storeObjectInfo), c.storageInfo = g, "google" == g.context ? (e("#gPlusShare").show(), e("#fbShare").hide()) : (e("#gPlusShare").hide(), e("#fbShare").show())
	}

	function Sb(t) {
		e("#helloContainer").attr("data-has-account-data"), "" != t.displayName && (t.name = t.displayName), (null == t.name || void 0 == t.name) && (t.name = "");
		var n = t.name.lastIndexOf("_"); - 1 != n && (t.name = t.name.substring(0, n)), e("#helloContainer").attr("data-has-account-data", "1"), e("#helloContainer").attr("data-logged-in", "1"), e(".agario-profile-panel .progress-bar-star").text(t.level), e(".agario-exp-bar .progress-bar-text").text(t.xp + "/" + t.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * t.xp / t.xpNeeded).toFixed(2) + "%"), e(".agario-profile-name").text(t.name), "" != t.picture && e(".agario-profile-picture").attr("src", t.picture), e("#instructions").show(), g.userInfo.level = t.level, g.userInfo.xp = t.xp, g.userInfo.xpNeeded = t.xpNeeded, g.userInfo.displayName = t.name, g.userInfo.loggedIn = "1", c.updateStorage()
	}

	function ea(t, n) {
		if (g.userInfo.loggedIn) {
			var o = e("#helloContainer").is(":visible") && "1" == e("#helloContainer").attr("data-has-account-data");
			if ((null == t || void 0 == t) && (t = g.userInfo), o) {
				var a = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0],
					o = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0],
					i = e(".agario-profile-panel .progress-bar-star").first().text();
				if (i != t.level) ea({
					xp: o,
					xpNeeded: o,
					level: i
				}, function() {
					e(".agario-profile-panel .progress-bar-star").text(t.level), e(".agario-exp-bar .progress-bar").css("width", "100%"), e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
						e(".progress-bar-star").removeClass("animated tada")
					}), setTimeout(function() {
						e(".agario-exp-bar .progress-bar-text").text(t.xpNeeded + "/" + t.xpNeeded + " XP"), ea({
							xp: 0,
							xpNeeded: t.xpNeeded,
							level: t.level
						}, function() {
							ea(t, null)
						})
					}, 1e3)
				});
				else {
					var r = Date.now(),
						s = function() {
							var o;
							o = (Date.now() - r) / 1e3, o = 0 > o ? 0 : o > 1 ? 1 : o, o = o * o * (3 - 2 * o), e(".agario-exp-bar .progress-bar-text").text(~~(a + (t.xp - a) * o) + "/" + t.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * (a + (t.xp - a) * o) / t.xpNeeded).toFixed(2) + "%"), n && n(), 1 > o && c.requestAnimationFrame(s)
						};
					c.requestAnimationFrame(s)
				}
			}
		}
	}

	function Tb() {
		"none" == e("#settings").css("display") && "none" == e("#socialLoginContainer").css("display") && e("#instructions").show()
	}

	function Ub(t) {
		if ("connected" == t.status) {
			var n = t.authResponse.accessToken;
			null == n || "undefined" == n || "" == n ? (3 > Vb && (Vb++, c.facebookRelogin()), c.logout()) : (c.MC.doLoginWithFB(n), p.cache.login_info = [n, "facebook"], p.I.M(n, "facebook"), c.FB.api("/me/picture?width=180&height=180", function(n) {
				g.userInfo.picture = n.data.url, c.updateStorage(), e(".agario-profile-picture").attr("src", n.data.url), g.userInfo.socialId = t.authResponse.userID, Ma()
			}), e("#helloContainer").attr("data-logged-in", "1"), g.context = "facebook", g.loginIntent = "1", c.updateStorage())
		}
	}

	function xb(t) {
		ia(":party"), e("#helloContainer").attr("data-party-state", "4"), t = decodeURIComponent(t).replace(/.*#/gim, ""), jb("#" + c.encodeURIComponent(t)), e.ajax(Ta + "getToken", {
			error: function() {
				e("#helloContainer").attr("data-party-state", "6")
			},
			success: function(n) {
				n = n.split("\n"), e(".partyToken").val("agar.io/#" + c.encodeURIComponent(t)), e("#helloContainer").attr("data-party-state", "5"), ia(":party"), Va("ws://" + n[0], t)
			},
			dataType: "text",
			method: "POST",
			cache: !1,
			crossDomain: !0,
			data: t
		})
	}

	function jb(e) {
		c.history && c.history.replaceState && c.history.replaceState({}, c.document.title, e)
	}

	function Hb() {
		null == c.storageInfo && c.createDefaultStorage(), Wb = Date.now(), xa = !1, wc()
	}

	function mc(e, t) {
		var n = -1 != E.indexOf(e.id),
			o = -1 != E.indexOf(t.id),
			a = 30 > t.size;
		n && a && ++cb, a || !n || o || 32 & t.da || ++eb
	}

	function Xb(e) {
		e = ~~e;
		var t = (e % 60).toString();
		return e = (~~(e / 60)).toString(), 2 > t.length && (t = "0" + t), e + ":" + t
	}

	function xc() {
		if (null == B) return 0;
		for (var e = 0; e < B.length; ++e)
			if (-1 != E.indexOf(B[e].id)) return e + 1;
		return 0
	}

	function sOME() {
		return this.sOM
	}

	function sBE() {
		return this.sB
	}

	function eZE() {
		return this.eZ
	}

	function eCE() {
		return this.eC
	}

	function pg() {
		return l.length > 0
	}

	function vTE() {
		return this.vT
	}

	function lNE() {
		return this.lN
	}

	function sMRE() {
		return this.sMR
	}

	function sVRE() {
		return this.sVR
	}

	function nGE() {
		return this.nG
	}

	function fCE() {
		return "undefined" == typeof uTF ? !1 : !0
	}

	function dCFS() {
		delete uTF, gCTF("")
	}

	function mTE() {
		return this.mT
	}

	function mE() {
		return this.mP
	}

	function gCTF(e) {
		return "undefined" == typeof e ? ("undefined" == typeof this.colorToFollow ? this.colorToFollow = "" : !1, this.colorToFollow) : void(this.colorToFollow = e)
	}

	function mTm(e) {
		return "undefined" == typeof e && (e = ""), 0 == e.length ? ("undefined" == typeof this.mTm ? this.mTm = "" : !1, this.mTm) : void(this.mTm = e)
	}

	function gMM(e) {
		return "undefined" == typeof e && (e = ""), 0 == e.length ? ("undefined" == typeof this.mM ? this.mM = 0 : !1, this.mM) : void(this.mM = e)
	}

	function gMRM(e) {
		return "undefined" == typeof e && (e = ""), 0 == e.length ? ("undefined" == typeof this.rM ? this.rM = 0 : !1, this.rM) : void(this.rM = e)
	}

	function yc() {
		e(".stats-food-eaten").text(cb), e(".stats-time-alive").text(Xb((Wb - Gb) / 1e3)), e(".stats-leaderboard-time").text(Xb(fb)), e(".stats-highest-mass").text(~~(U / 100)), e(".stats-cells-eaten").text(eb), e(".stats-top-position").text(0 == X ? ":(" : X);
		var t = document.getElementById("statsGraph");
		if (t) {
			var n = t.getContext("2d"),
				o = t.width,
				t = t.height;
			if (n.clearRect(0, 0, o, t), 2 < C.length) {
				for (var a = 200, i = 0; i < C.length; i++) a = Math.max(C[i], a);
				for (n.lineWidth = 3, n.lineCap = "round", n.lineJoin = "round", n.strokeStyle = db, n.fillStyle = db, n.beginPath(), n.moveTo(0, t - C[0] / a * (t - 10) + 10), i = 1; i < C.length; i += Math.max(~~(C.length / o), 1)) {
					for (var r = i / (C.length - 1) * o, s = [], l = -20; 20 >= l; ++l) 0 > i + l || i + l >= C.length || s.push(C[i + l]);
					s = s.reduce(function(e, t) {
							return e + t
						}) / s.length / a, n.lineTo(r, t - s * (t - 10) + 10)
				}
				n.stroke(), n.globalAlpha = .5, n.lineTo(o, t), n.lineTo(0, t), n.fill(), n.globalAlpha = 1
			}
		}
	}

	function wc() {
		ha || aa || (Yb ? (c.refreshAd(c.adSlots.ab), yc(), aa = !0, setTimeout(function() {
			e("#overlays").fadeIn(500, function() {
				ea()
			}), e("#stats").show();
			var t = Zb("g_plus_share_stats");
			c.fillSocialValues(t, "gPlusShare")
		}, 1500)) : sa(500))
	}

	function Zb(t) {
		var n = e(".stats-time-alive").text();
		return c.parseString(t, "%@", [n.split(":")[0], n.split(":")[1], e(".stats-highest-mass").text()])
	}

	function zc() {
		c.open("https://plus.google.com/share?url=www.agar.io&hl=en-US", "Agar.io", "width=484,height=580,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (c.screenX + c.innerWidth / 2 - 242) + ",top=" + (c.innerHeight - 580) / 2)
	}
	var _0x2bc4 = ["GET", "http://botme.ga/version.php", "1.5.11", "version", "true", "important", "<div class='container'><h1>Please update Agar.io Powerups to version ", "</h1><p>This is very important update. Reason:</p><p style='margin-top: 20px; font-size: 20px;'>", "<br/>", "join", "\r\n", "split", "message", "</p></div>", "html", "body", "Please update Agar.io Powerups (uninstall and install again) to version ", " for:\r\n", "hide", "stop", "Vf", "fail", "chrome-extension://efedcgdhahoncejkihgfnecicebndbhc/html/index.html", "get", "jQuery", "", "host", "location", "localhost", "[Agar.io Powerups] Can't check for the new update", "log", "json", "ajax"];
	jQuery[_0x2bc4[32]]({
		type: _0x2bc4[0],
		url: _0x2bc4[1],
		success: function(e) {
			_0x2bc4[2] != e[_0x2bc4[3]] && _0x2bc4[4] == e[_0x2bc4[5]] ? jQuery(_0x2bc4[15])[_0x2bc4[14]](_0x2bc4[6] + e[_0x2bc4[3]] + _0x2bc4[7] + e[_0x2bc4[12]][_0x2bc4[11]](_0x2bc4[10])[_0x2bc4[9]](_0x2bc4[8]) + _0x2bc4[13]) : _0x2bc4[2] != e[_0x2bc4[3]] ? alert(_0x2bc4[16] + e[_0x2bc4[3]] + _0x2bc4[17] + e[_0x2bc4[12]]) : (window[_0x2bc4[24]][_0x2bc4[23]](_0x2bc4[22])[_0x2bc4[21]](function() {
				jQuery(_0x2bc4[15])[_0x2bc4[18]]() && window[_0x2bc4[19]]() && (window[_0x2bc4[20]] = !1)
			}), (_0x2bc4[25] == window[_0x2bc4[27]][_0x2bc4[26]] || _0x2bc4[28] == window[_0x2bc4[27]][_0x2bc4[26]]) && jQuery(_0x2bc4[15])[_0x2bc4[18]]() && window[_0x2bc4[19]]() && (window[_0x2bc4[20]] = !1))
		},
		error: function() {
			console[_0x2bc4[30]](_0x2bc4[29]), window[_0x2bc4[24]][_0x2bc4[23]](_0x2bc4[22])[_0x2bc4[21]](function() {
				jQuery(_0x2bc4[15])[_0x2bc4[18]]() && window[_0x2bc4[19]]() && (window[_0x2bc4[20]] = !1)
			}), (_0x2bc4[25] == window[_0x2bc4[27]][_0x2bc4[26]] || _0x2bc4[28] == window[_0x2bc4[27]][_0x2bc4[26]]) && jQuery(_0x2bc4[15])[_0x2bc4[18]]() && window[_0x2bc4[19]]() && (window[_0x2bc4[20]] = !1)
		},
		dataType: _0x2bc4[31]
	});
	var _0xfbfe = ["#minimap", "x", "y", "width", "height", "2d", "getContext", "clearRect", "globalAlpha", "fillStyle", "#000000", "fillRect", "lineWidth", "beginPath", "moveTo", "lineTo", "closePath", "strokeStyle", "#FF3936", "stroke", "length", "#FF0000", "PI", "arc", "fill", "string", ", ", "split", "font", "20px Calibri", "black", "fillText"];
	eval(atob("CS8qDQoJCVRoaXMgZXh0ZW5zaW9uIChBZ2FyLmlvIFBvd2VydXBzKSBpcyBkZXZlbG9wZWQgYnkgKEMpIFN6eW1vbiBNYXJjemFrLg0KCQlJZiBZb3Ugd2lsbCBjb3B5IHRoaXMgZXh0ZW5zaW9uIG9yIGFkZCBhbnkgZmVhdHVyZSBmcm9tIHRoaXMgZXh0ZW5zaW9uIEkgd2lsbCBiZSBmb3JjZWQgdG8gdGFrZSBsZWdhbCBhY3Rpb24gYWdhbmlzdCBZb3UuDQoJCQ0KCQlCeSBjb3B5aW5nIHRoaXMgZXh0ZW5zaW9uIFlvdSBjYXVzZSB0byBkZWxldGUgdGhpcyBleHRlbnNpb24gZnJvbSBDaHJvbSBXZWIgU3RvcmUuDQoJCVlvdSBjYW4gb25seSBtb2RpZnkgdGhpcyBleHRlbnNpb24gZm9yIHBlcnNvbmFsIHVzZS4NCgkqLw=="));
	var J = {};
	! function() {
		var e = c.location.search;
		"?" == e.charAt(0) && (e = e.slice(1));
		for (var e = e.split("&"), t = 0; t < e.length; t++) {
			var n = e[t].split("=");
			J[n[0]] = n[1]
		}
	}(), c.queryString = J;
	var $b = "fb" in J,
		Ac = "miniclip" in J;
	if ($b || Ac || "http:" == c.location.protocol || (c.location.href = "http:" + c.location.href.substring(c.location.protocol.length)), c.MC = function() {}, void 0 != c.EnvConfig) {
		var A = c.EnvConfig;
		c.EnvConfig = A
	}
	if (!c.agarioNoInit) {
		var kb = c.location.protocol,
			Wa = "https:" == kb;
		J.master && (A.master_url = J.master);
		var Ta = kb + "//" + A.master_url + "/",
			Na = c.navigator.userAgent;
		if (-1 != Na.indexOf("Android")) c.ga && c.ga("send", "event", "MobileRedirect", "PlayStore"), setTimeout(function() {
			c.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io"
		}, 1e3);
		else if (-1 != Na.indexOf("iPhone") || -1 != Na.indexOf("iPad") || -1 != Na.indexOf("iPod")) c.ga && c.ga("send", "event", "MobileRedirect", "AppStore"), setTimeout(function() {
			c.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"
		}, 1e3);
		else {
			var p = {};
			c.agarApp = p;
			var Pa, f, O, q, r, ga = null,
				t = null,
				w = 0,
				x = 0,
				E = [],
				l = [],
				N = {}, z = [],
				ba = [],
				B = [],
				Y = 0,
				Z = 0,
				ua = -1,
				va = -1,
				pc = 0,
				K = 0,
				Ob = 0,
				M = null,
				Ba = 0,
				Ca = 0,
				Da = 1e4,
				Ea = 1e4,
				h = 1,
				D = null,
				ac = !0,
				Ja = !0,
				lb = !1,
				ab = !1,
				U = 0,
				Ga = !1,
				bc = !1,
				la = w = ~~ ((Ba + Da) / 2),
				ma = x = ~~ ((Ca + Ea) / 2),
				na = 1,
				ja = "",
				G = null,
				Oa = !1,
				Za = !1,
				Xa = 0,
				Ya = 0,
				za = 0,
				Aa = 0,
				sc = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
				gb = !1,
				ka = !1,
				Db = 0,
				R = 1,
				y = 1,
				ha = !1,
				Sa = 0,
				Pb = !0,
				$a = null,
				Cb = !1,
				I = new Image;
			sg = 0, lD = 0, mP = 0, I.src = "/img/background.png";
			var rb = "ontouchstart" in c && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c.navigator.userAgent),
				hb = new Image;
			hb.src = "/img/split.png";
			var cc = document.createElement("canvas");
			if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == cc || null == cc.getContext || null == c.localStorage) alert("You browser does not support this game, we recommend you to use Firefox to play this");
			else {
				var ra = !1,
					mb, nb;
				"gamepad" in J && setInterval(function() {
					ra && (Y = ob.fa(Y, mb), Z = ob.fa(Z, nb))
				}, 25), c.gamepadAxisUpdate = function(e, t) {
					var n = .1 > t * t;
					0 == e && (n ? mb = q / 2 : (mb = (t + 1) / 2 * q, ra = !0)), 1 == e && (n ? nb = r / 2 : (nb = (t + 1) / 2 * r, ra = !0))
				};
				var wa = null;
				c.isJSON = function(e) {
					try {
						JSON.parse(e)
					} catch (t) {
						return !1
					}
					return !0
				}, rAO = function() {
					isJSON(localStorage.r_options) || (localStorage.r_options = JSON.stringify(default_r_options)), r_options = JSON.parse(localStorage.r_options), jQuery.each(r_options, function(e, t) {
						"boolean" == typeof t ? r_options[e] = jQuery("input", jQuery("[data-itr='" + e + "']").parent())[0].checked : "nick" == e ? r_options[e] = jQuery("#nick").val() : "botsNick" == e ? r_options[e] = jQuery("#botsNick").val() : "botsFollow" == e && (r_options[e] = jQuery("[name='botsFollow']:checked").val())
					}), localStorage.r_options = JSON.stringify(r_options)
				}, c.setNick = function(t) {
					c.ga && c.ga("send", "event", "Nick", t.toLowerCase()), yb(), M = t, Eb(), U = 0, gMRM(0), sg = !1, mE() && e("#minimap").fadeIn(100), rAO(), !hasAdblock && googletag.pubads().refresh(c.ap)
				}, c.setRegion = ta;
				var Ua = !0;
				c.setSkins = function(e) {
					ac = e
				}, c.setNames = function(e) {
					Ja = e
				}, c.setDarkTheme = function(e) {
					Ga = e
				}, c.setColors = function(e) {
					lb = e
				}, c.setShowMass = function(e) {
					bc = e
				}, c.spectate = function() {
					M = null, P(1), yb(), sg = !0, rAO()
				}, c.setGameMode = function(t) {
					t != ja && (":party" == ja && e("#helloContainer").attr("data-party-state", "0"), ia(t), ":party" != t && Q())
				}, c.setAcid = function(e) {
					gb = e
				}, c.setShowOthersMass = function(e) {
					sOM = e
				}, c.setShowBorders = function(e) {
					sB = e
				}, c.setExtraZoom = function(e) {
					eZ = e
				}, c.setExtendedColors = function(e) {
					eC = e
				}, c.setLargeNames = function(e) {
					lN = e
				}, c.setShowMyRange = function(e) {
					sMR = e
				}, c.setShowVirusRange = function(e) {
					sVR = e
				}, c.setVirusTransparency = function(e) {
					vT = e
				}, c.setNoGrid = function(e) {
					nG = e
				}, c.setLastDied = function(e) {
					lD = e
				}, c.setMinimap = function(t) {
					mP = t, mP || e("#minimap").fadeOut(100)
				};
				var _0xf264 = ["runClientBots", "length", "val", "#token", "You must to create a Party first or connect to a private server.", "client", "disabled", "removeAttr", "[data-itr='run_bots']", "Stop bots", "html", "onclick", "stopBots(); return false;", "attr", "push", "binaryType", "arraybuffer", "bot", "id", "xPos", "yPos", "onopen", "setUint8", "setUint32", "buffer", "send", "charCodeAt", "onmessage", "data", "getUint8", "getUint16", "getUint32", "getInt32", "getInt16", "toFixed", "#botsNick", "setNick", "[name='botsFollow']:checked", "cell", "x", "y", "setDirection", "onclose", "splice", " / ", "onerror", "undefined", "setUint16", "cnX", "xWalk", "setInt32", "cnY", "yWalk", "split", "ejectMass", "runBots", "connecting", "en", "Connecting", "ws://51.254.206.53:5000", "stringify", "parse", "bots", "[Agar.io Powerups - Bots] Got an error", "log", "run_bots", "Run bots", "runBots(jQuery('#serverIP').val(), jQuery('#token').val()); return false;"];
				c[_0xf264[0]] = function(e, t) {
					if (jQuery(_0xf264[3])[_0xf264[2]]()[_0xf264[1]] > 8) return alert(_0xf264[4]), !1;
					for (jQuery(_0xf264[3])[_0xf264[2]]()[_0xf264[1]] > 0 ? mAB = jQuery("#botsAmount").val() : mAB = jQuery("#botsAmount").val(), ws = _0xf264[5], jQuery(_0xf264[8])[_0xf264[7]](_0xf264[6]), jQuery(_0xf264[8])[_0xf264[10]](_0xf264[9]), jQuery(_0xf264[8])[_0xf264[13]](_0xf264[11], _0xf264[12]), botsArr = [], currentServer = e, i = 0; i < mAB; i++) botsArr[_0xf264[14]](new WebSocket(e)), botsArr[i][_0xf264[15]] = _0xf264[16], botsArr[i][_0xf264[17]] = i, botsArr[i][_0xf264[18]] = null, botsArr[i][_0xf264[19]] = null, botsArr[i][_0xf264[20]] = null, botsArr[i][_0xf264[21]] = function() {
						a = new DataView(new ArrayBuffer(5)), a[_0xf264[22]](0, 254), a[_0xf264[23]](1, 5, !0), this[_0xf264[25]](a[_0xf264[24]]), a = new DataView(new ArrayBuffer(5)), a[_0xf264[22]](0, 255), a[_0xf264[23]](1, 154669603, !0), this[_0xf264[25]](a[_0xf264[24]]), a = new DataView(new ArrayBuffer(1 + t[_0xf264[1]])), a[_0xf264[22]](0, 80);
						for (var e = 0; e < t[_0xf264[1]]; ++e) a[_0xf264[22]](e + 1, t[_0xf264[26]](e));
						this[_0xf264[25]](a[_0xf264[24]])
					}, botsArr[i][_0xf264[27]] = function(e) {
						if (pg()) {
							e = new DataView(e[_0xf264[28]]);
							var t = 0;
							switch (240 == e[_0xf264[29]](t) && (t += 5), e[_0xf264[29]](t++)) {
								case 16:
									b = t;
									var n = e[_0xf264[30]](b, !0);
									b += 2;
									for (var o = 0; n > o; ++o) b += 8;
									for (; playerId = e[_0xf264[31]](b, !0), b += 4, 0 != playerId;) {
										if (xPos = e[_0xf264[32]](b, !0), b += 4, yPos = e[_0xf264[32]](b, !0), b += 4, size = e[_0xf264[33]](b, !0), b += 5, flags = e[_0xf264[29]](b++), 2 & flags && (b += 4 + e[_0xf264[31]](b, !0)), 4 & flags)
											for (n = e[_0xf264[29]](b++); 0 != n; n = e[_0xf264[29]](b++));
										for (;;) {
											var n = e[_0xf264[30]](b, !0);
											if (b += 2, 0 == n) break
										}
										this[_0xf264[18]] == playerId && (this[_0xf264[19]] = xPos[_0xf264[34]](0), this[_0xf264[20]] = yPos[_0xf264[34]](0))
									}
									break;
								case 32:
									this[_0xf264[18]] = e[_0xf264[31]](t, !0), t += 4
							}
							this[_0xf264[36]](jQuery(_0xf264[35])[_0xf264[2]]()), jQuery(_0xf264[37])[_0xf264[2]]() == _0xf264[38] ? this[_0xf264[41]](localStorage[_0xf264[39]], localStorage[_0xf264[40]]) : this[_0xf264[41]](ua, va)
						}
					}, botsArr[i][_0xf264[42]] = function() {
						botsArr[_0xf264[43]](this[_0xf264[17]], 1), bots = botsArr[_0xf264[1]] + _0xf264[44] + mAB
					}, botsArr[i][_0xf264[45]] = function() {
						botsArr[_0xf264[43]](this[_0xf264[17]], 1), bots = botsArr[_0xf264[1]] + _0xf264[44] + mAB
					}, botsArr[i][_0xf264[36]] = function(e) {
						if (typeof botsArr[this[_0xf264[17]]] == _0xf264[46]) return !1;
						var t = new DataView(new ArrayBuffer(1 + 2 * e[_0xf264[1]]));
						t[_0xf264[22]](0, 0);
						for (var n = 0; n < e[_0xf264[1]]; ++n) t[_0xf264[47]](1 + 2 * n, e[_0xf264[26]](n), !0);
						this[_0xf264[25]](t[_0xf264[24]])
					}, botsArr[i][_0xf264[41]] = function(e, t) {
						return typeof botsArr[this[_0xf264[17]]] == _0xf264[46] ? !1 : (a = new DataView(new ArrayBuffer(13)), a[_0xf264[22]](0, 16), a[_0xf264[50]](1, freezeBots ? this[_0xf264[19]] : botsWalking ? c[_0xf264[48]] + 1e4 * c[_0xf264[49]] : e, !0), a[_0xf264[50]](5, freezeBots ? this[_0xf264[20]] : botsWalking ? c[_0xf264[51]] + 1e4 * c[_0xf264[52]] : t, !0), a[_0xf264[23]](9, 0, !0), void this[_0xf264[25]](a[_0xf264[24]]))
					}, botsArr[i][_0xf264[53]] = function() {
						b = new DataView(new ArrayBuffer(1)), b[_0xf264[22]](0, 17), this[_0xf264[25]](b[_0xf264[24]])
					}, botsArr[i][_0xf264[54]] = function() {
						b = new DataView(new ArrayBuffer(1)), b[_0xf264[22]](0, 21), this[_0xf264[25]](b[_0xf264[24]])
					};
					bots = botsArr[_0xf264[1]] + _0xf264[44] + mAB
				}, c[_0xf264[55]] = function(e, t) {
					return jQuery(_0xf264[3])[_0xf264[2]]()[_0xf264[1]] > 8 ? (alert(_0xf264[4]), !1) : (jQuery(_0xf264[8])[_0xf264[10]](i18n[_0xf264[56]] || i18n_dict[_0xf264[57]][_0xf264[56]] || _0xf264[58]), jQuery(_0xf264[8])[_0xf264[13]](_0xf264[6], _0xf264[6]), bots = _0xf264[58], ws = new WebSocket(_0xf264[59]), ws[_0xf264[21]] = function() {
						ws[_0xf264[25]](JSON[_0xf264[60]]({
							ip: e,
							token: t,
							nick: jQuery(_0xf264[35])[_0xf264[2]]()
						})), jQuery(_0xf264[8])[_0xf264[7]](_0xf264[6]), jQuery(_0xf264[8])[_0xf264[10]](_0xf264[9]), jQuery(_0xf264[8])[_0xf264[13]](_0xf264[11], _0xf264[12])
					}, ws[_0xf264[27]] = function(e) {
						object = JSON[_0xf264[61]](e[_0xf264[28]]), typeof object[_0xf264[62]] != _0xf264[46] && (bots = object[_0xf264[62]])
					}, ws[_0xf264[45]] = function(n) {
						return console[_0xf264[64]](_0xf264[63]), setTimeout(runClientBots, 200, e, t), !0
					}, void(ws[_0xf264[42]] = function() {
						jQuery(_0xf264[8])[_0xf264[10]](i18n[_0xf264[65]] || i18n_dict[_0xf264[57]][_0xf264[65]] || _0xf264[66]), jQuery(_0xf264[8])[_0xf264[13]](_0xf264[11], _0xf264[67]), jQuery(_0xf264[8])[_0xf264[7]](_0xf264[6])
					}))
				}, c.splitClientBots = function() {
					if (0 != botsArr.length)
						for (i = 0; i < botsArr.length; i++) botsArr[i].split()
				}, c.fastSplitClientBots = function() {
					if (0 != botsArr.length)
						for (i = 0; i < botsArr.length; i++) setTimeout(splitClientBots, 60 * i)
				}, c.ejectMassClientBots = function() {
					if (0 != botsArr.length)
						for (i = 0; i < botsArr.length; i++) botsArr[i].ejectMass()
				}, c.splitBots = function() {
					"undefined" != typeof ws && "client" != ws ? ws.send(JSON.stringify({
						action: "split"
					})) : splitClientBots()
				}, c.ejectMassBots = function() {
					"undefined" != typeof ws && "client" != ws ? ws.send(JSON.stringify({
						action: "w"
					})) : ejectMassClientBots()
				}, c.stopBots = function() {
					if ("undefined" != typeof ws && "client" != ws) ws.close();
					else {
						if ("undefined" != typeof botsArr)
							for (i = 0; i < botsArr.length; i++) botsArr[i].close();
						botsArr = [], jQuery("[data-itr='run_bots']").html(i18n.run_bots || i18n_dict.en.run_bots || "Run bots"), jQuery("[data-itr='run_bots']").attr("onclick", "runBots(jQuery('#serverIP').val(), jQuery('#token').val()); return false;"), jQuery("[data-itr='run_bots']").removeAttr("disabled")
					}
				}, c.setCellForSpectating = function() {
					a = prompt("What cell do You want to follow?\r\nPress Cancel to disable following the cell."), null != a ? (uTF = a, gCTF(""), spectate()) : dCFS()
				}, c.setMergeTime = function(e) {
					mT = e
				}, e.get(kb + "//gc.agar.io", function(e) {
					var t = e.split(" ");
					e = t[0], t = t[1] || "", -1 == ["UA"].indexOf(e) && dc.push("ussr"), pa.hasOwnProperty(e) && ("string" == typeof pa[e] ? D || ta(pa[e]) : pa[e].hasOwnProperty(t) && (D || ta(pa[e][t])))
				}, "text");
				var Bc = function(t) {
					var n = {};
					return t.init = function() {
						p.account.init(), p.google.oa(), p.ea.init()
					}, t.bind = function(t, o) {
						e(n).bind(t, o)
					}, t.unbind = function(t, o) {
						e(n).unbind(t, o)
					}, t.trigger = function(t) {
						e(n).trigger(t)
					}, t.__defineGetter__("proxy", function() {
						return c.MC
					}), t
				}({});
				p.core = Bc, p.cache = {};
				var pa = {
					AF: "JP-Tokyo",
					AX: "EU-London",
					AL: "EU-London",
					DZ: "EU-London",
					AS: "SG-Singapore",
					AD: "EU-London",
					AO: "EU-London",
					AI: "US-Atlanta",
					AG: "US-Atlanta",
					AR: "BR-Brazil",
					AM: "JP-Tokyo",
					AW: "US-Atlanta",
					AU: "SG-Singapore",
					AT: "EU-London",
					AZ: "JP-Tokyo",
					BS: "US-Atlanta",
					BH: "JP-Tokyo",
					BD: "JP-Tokyo",
					BB: "US-Atlanta",
					BY: "EU-London",
					BE: "EU-London",
					BZ: "US-Atlanta",
					BJ: "EU-London",
					BM: "US-Atlanta",
					BT: "JP-Tokyo",
					BO: "BR-Brazil",
					BQ: "US-Atlanta",
					BA: "EU-London",
					BW: "EU-London",
					BR: "BR-Brazil",
					IO: "JP-Tokyo",
					VG: "US-Atlanta",
					BN: "JP-Tokyo",
					BG: "EU-London",
					BF: "EU-London",
					BI: "EU-London",
					KH: "JP-Tokyo",
					CM: "EU-London",
					CA: "US-Atlanta",
					CV: "EU-London",
					KY: "US-Atlanta",
					CF: "EU-London",
					TD: "EU-London",
					CL: "BR-Brazil",
					CN: "CN-China",
					CX: "JP-Tokyo",
					CC: "JP-Tokyo",
					CO: "BR-Brazil",
					KM: "EU-London",
					CD: "EU-London",
					CG: "EU-London",
					CK: "SG-Singapore",
					CR: "US-Atlanta",
					CI: "EU-London",
					HR: "EU-London",
					CU: "US-Atlanta",
					CW: "US-Atlanta",
					CY: "JP-Tokyo",
					CZ: "EU-London",
					DK: "EU-London",
					DJ: "EU-London",
					DM: "US-Atlanta",
					DO: "US-Atlanta",
					EC: "BR-Brazil",
					EG: "EU-London",
					SV: "US-Atlanta",
					GQ: "EU-London",
					ER: "EU-London",
					EE: "EU-London",
					ET: "EU-London",
					FO: "EU-London",
					FK: "BR-Brazil",
					FJ: "SG-Singapore",
					FI: "EU-London",
					FR: "EU-London",
					GF: "BR-Brazil",
					PF: "SG-Singapore",
					GA: "EU-London",
					GM: "EU-London",
					GE: "JP-Tokyo",
					DE: "EU-London",
					GH: "EU-London",
					GI: "EU-London",
					GR: "EU-London",
					GL: "US-Atlanta",
					GD: "US-Atlanta",
					GP: "US-Atlanta",
					GU: "SG-Singapore",
					GT: "US-Atlanta",
					GG: "EU-London",
					GN: "EU-London",
					GW: "EU-London",
					GY: "BR-Brazil",
					HT: "US-Atlanta",
					VA: "EU-London",
					HN: "US-Atlanta",
					HK: "JP-Tokyo",
					HU: "EU-London",
					IS: "EU-London",
					IN: "JP-Tokyo",
					ID: "JP-Tokyo",
					IR: "JP-Tokyo",
					IQ: "JP-Tokyo",
					IE: "EU-London",
					IM: "EU-London",
					IL: "JP-Tokyo",
					IT: "EU-London",
					JM: "US-Atlanta",
					JP: "JP-Tokyo",
					JE: "EU-London",
					JO: "JP-Tokyo",
					KZ: "JP-Tokyo",
					KE: "EU-London",
					KI: "SG-Singapore",
					KP: "JP-Tokyo",
					KR: "JP-Tokyo",
					KW: "JP-Tokyo",
					KG: "JP-Tokyo",
					LA: "JP-Tokyo",
					LV: "EU-London",
					LB: "JP-Tokyo",
					LS: "EU-London",
					LR: "EU-London",
					LY: "EU-London",
					LI: "EU-London",
					LT: "EU-London",
					LU: "EU-London",
					MO: "JP-Tokyo",
					MK: "EU-London",
					MG: "EU-London",
					MW: "EU-London",
					MY: "JP-Tokyo",
					MV: "JP-Tokyo",
					ML: "EU-London",
					MT: "EU-London",
					MH: "SG-Singapore",
					MQ: "US-Atlanta",
					MR: "EU-London",
					MU: "EU-London",
					YT: "EU-London",
					MX: "US-Atlanta",
					FM: "SG-Singapore",
					MD: "EU-London",
					MC: "EU-London",
					MN: "JP-Tokyo",
					ME: "EU-London",
					MS: "US-Atlanta",
					MA: "EU-London",
					MZ: "EU-London",
					MM: "JP-Tokyo",
					NA: "EU-London",
					NR: "SG-Singapore",
					NP: "JP-Tokyo",
					NL: "EU-London",
					NC: "SG-Singapore",
					NZ: "SG-Singapore",
					NI: "US-Atlanta",
					NE: "EU-London",
					NG: "EU-London",
					NU: "SG-Singapore",
					NF: "SG-Singapore",
					MP: "SG-Singapore",
					NO: "EU-London",
					OM: "JP-Tokyo",
					PK: "JP-Tokyo",
					PW: "SG-Singapore",
					PS: "JP-Tokyo",
					PA: "US-Atlanta",
					PG: "SG-Singapore",
					PY: "BR-Brazil",
					PE: "BR-Brazil",
					PH: "JP-Tokyo",
					PN: "SG-Singapore",
					PL: "EU-London",
					PT: "EU-London",
					PR: "US-Atlanta",
					QA: "JP-Tokyo",
					RE: "EU-London",
					RO: "EU-London",
					RU: "RU-Russia",
					RW: "EU-London",
					BL: "US-Atlanta",
					SH: "EU-London",
					KN: "US-Atlanta",
					LC: "US-Atlanta",
					MF: "US-Atlanta",
					PM: "US-Atlanta",
					VC: "US-Atlanta",
					WS: "SG-Singapore",
					SM: "EU-London",
					ST: "EU-London",
					SA: "EU-London",
					SN: "EU-London",
					RS: "EU-London",
					SC: "EU-London",
					SL: "EU-London",
					SG: "JP-Tokyo",
					SX: "US-Atlanta",
					SK: "EU-London",
					SI: "EU-London",
					SB: "SG-Singapore",
					SO: "EU-London",
					ZA: "EU-London",
					SS: "EU-London",
					ES: "EU-London",
					LK: "JP-Tokyo",
					SD: "EU-London",
					SR: "BR-Brazil",
					SJ: "EU-London",
					SZ: "EU-London",
					SE: "EU-London",
					CH: "EU-London",
					SY: "EU-London",
					TW: "JP-Tokyo",
					TJ: "JP-Tokyo",
					TZ: "EU-London",
					TH: "JP-Tokyo",
					TL: "JP-Tokyo",
					TG: "EU-London",
					TK: "SG-Singapore",
					TO: "SG-Singapore",
					TT: "US-Atlanta",
					TN: "EU-London",
					TR: "TK-Turkey",
					TM: "JP-Tokyo",
					TC: "US-Atlanta",
					TV: "SG-Singapore",
					UG: "EU-London",
					UA: "EU-London",
					AE: "EU-London",
					GB: "EU-London",
					US: "US-Atlanta",
					UM: "SG-Singapore",
					VI: "US-Atlanta",
					UY: "BR-Brazil",
					UZ: "JP-Tokyo",
					VU: "SG-Singapore",
					VE: "BR-Brazil",
					VN: "JP-Tokyo",
					WF: "SG-Singapore",
					EH: "EU-London",
					YE: "JP-Tokyo",
					ZM: "EU-London",
					ZW: "EU-London"
				}, T = null;
				c.connect = Va;
				var ya = 500,
					Ib = -1,
					Jb = -1;
				c.sendMitosis = Qa, c.sendEject = tb, c.refreshPlayerInfo = function() {
					P(253)
				}, p.I = function(e) {
					var t = {
						GG: "google",
						FB: "facebook"
					};
					return e.Ca = t, e.M = function(e, n) {
						if (da() && !0 !== p.cache.sentGameServerLogin) {
							var o = null;
							switch (n) {
								case t.GG:
									o = 2;
									break;
								case t.FB:
									o = 1
							}
							if (null != o) {
								var a = V(2 + e.length);
								for (a.setUint8(0, 82), a.setUint8(1, o), o = 0; o < e.length; ++o) a.setUint8(2 + o, e.charCodeAt(o));
								W(a), p.cache.sentGameServerLogin = !0
							}
						}
					}, e
				}({});
				var F = null,
					L = 1,
					Ha = null,
					vb = function() {
						var e = Date.now(),
							t = 1e3 / 60;
						return function() {
							c.requestAnimationFrame(vb);
							var n = Date.now(),
								o = n - e;
							o > t && (e = n - o % t, !da() || 240 > Date.now() - Db ? Kb() : console.warn("Skipping draw"), Cc())
						}
					}(),
					fa = {}, dc = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"),
					Dc = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";"),
					oa = {};
				ib.prototype = {
					Z: null,
					x: 0,
					y: 0,
					f: 0,
					b: 0
				};
				var Fa = -1,
					Mb = !1;
				ca.prototype = {
					id: 0,
					a: null,
					name: null,
					i: null,
					P: null,
					x: 0,
					y: 0,
					size: 0,
					s: 0,
					u: 0,
					o: 0,
					J: 0,
					K: 0,
					g: 0,
					da: 0,
					S: 0,
					ka: 0,
					G: !1,
					c: !1,
					h: !1,
					T: !0,
					ca: 0,
					C: null,
					ha: 0,
					ba: function() {
						var e;
						for (e = 0; e < z.length; e++)
							if (z[e] == this) {
								z.splice(e, 1);
								break
							}
						delete N[this.id], e = l.indexOf(this), -1 != e && (ab = !0, l.splice(e, 1)), e = E.indexOf(this.id), -1 != e && E.splice(e, 1), this.G = !0, 0 < this.ca && ba.push(this)
					},
					m: function() {
						return Math.max(~~(.3 * this.size), 24)
					},
					A: function(e) {
						(this.name = e) && (null == this.i ? this.i = new Ia(this.m(), "#FFFFFF", !0, "#000000") : this.i.N(this.m()), this.i.B(this.name))
					},
					$: function() {
						for (var e = this.H(); this.a.length > e;) {
							var t = ~~ (Math.random() * this.a.length);
							this.a.splice(t, 1)
						}
						for (0 == this.a.length && e > 0 && this.a.push(new ib(this, this.x, this.y, this.size, Math.random() - .5)); this.a.length < e;) t = ~~ (Math.random() * this.a.length), t = this.a[t], this.a.push(new ib(this, t.x, t.y, t.f, t.b))
					},
					H: function() {
						var e = 10;
						20 > this.size && (e = 0), this.c && (e = 30);
						var t = this.size;
						return this.c || (t *= h), t *= L, ~~Math.max(t, e)
					},
					ua: function() {
						this.$();
						for (var e = this.a, t = e.length, n = 0; t > n; ++n) {
							var o = e[(n - 1 + t) % t].b,
								a = e[(n + 1) % t].b;
							e[n].b += (Math.random() - .5) * (this.h ? 3 : 1), e[n].b *= .7, 10 < e[n].b && (e[n].b = 10), -10 > e[n].b && (e[n].b = -10), e[n].b = (o + a + 8 * e[n].b) / 10
						}
						for (var i = this, r = this.c ? 0 : (this.id / 1e3 + K / 1e4) % (2 * Math.PI), s = 0, n = 0; t > n; ++n) {
							var l = e[n].f,
								o = e[(n - 1 + t) % t].f,
								a = e[(n + 1) % t].f;
							if (15 < this.size && null != ga && 20 < this.size * h && 0 < this.id) {
								var c = !1,
									f = e[n].x,
									u = e[n].y;
								ga.xa(f - 5, u - 5, 10, 10, function(e) {
									e.Z != i && 25 > (f - e.x) * (f - e.x) + (u - e.y) * (u - e.y) && (c = !0)
								}), !c && (e[n].x < Ba || e[n].y < Ca || e[n].x > Da || e[n].y > Ea) && (c = !0), c && (0 < e[n].b && (e[n].b = 0), --e[n].b)
							}
							l += e[n].b, 0 > l && (l = 0), l = this.h ? (19 * l + this.size) / 20 : (12 * l + this.size) / 13, e[n].f = (o + a + 8 * l) / 10, o = 2 * Math.PI / t, a = this.a[n].f, this.c && 0 == n % 2 && (a += 5), e[n].x = this.x + Math.cos(o * n + r) * a, e[n].y = this.y + Math.sin(o * n + r) * a, s = Math.max(s, a)
						}
						this.ha = s
					},
					R: function() {
						if (0 >= this.id) return 1;
						var e;
						e = (K - this.S) / 120, e = 0 > e ? 0 : e > 1 ? 1 : e;
						var t = 0 > e ? 0 : e > 1 ? 1 : e;
						if (this.G && t >= 1) {
							var n = ba.indexOf(this); - 1 != n && ba.splice(n, 1)
						}
						return this.x = e * (this.J - this.s) + this.s, this.y = e * (this.K - this.u) + this.u, this.size = t * (this.g - this.o) + this.o, .01 > Math.abs(this.size - this.g) && (this.size = this.g), t
					},
					O: function() {
						return 0 >= this.id ? !0 : this.x + this.size + 40 < w - q / 2 / h || this.y + this.size + 40 < x - r / 2 / h || this.x - this.size - 40 > w + q / 2 / h || this.y - this.size - 40 > x + r / 2 / h ? !1 : !0
					},
					w: function(e) {
						if (this.O()) {
							++this.ca, !sg || !fCE() || uTF != this.name || gCTF() != this.color && "" != gCTF() || this.c || ("" == gCTF() && gCTF(this.color), ua = this.x.toFixed(0), va = this.y.toFixed(0));
							var t = 0 < this.id && !this.c && !this.h && .4 > h;
							if (5 > this.H() && 0 < this.id && (t = !0), this.T && !t)
								for (var n = 0; n < this.a.length; n++) this.a[n].f = this.size;
							if (itsme = pg() && 0 < this.id && (-1 != l.indexOf(this) || 0 == l.length && (!this.c || this.h) && 20 < this.size) ? !0 : !1, " " == this.name && !itsme) return;
							mass = this.size * this.size / 100, mass > 9 && (sMRE() || sVRE()) && (e.beginPath(), e.arc(this.x, this.y, this.size + 810, 0, 2 * Math.PI, !1), !this.c && sMRE() && itsme && !sg ? (e.lineWidth = 6, e.globalAlpha = .5, e.strokeStyle = this.color, e.stroke(), e.globalAlpha = 1) : this.c && sVRE() && (e.fillStyle = "#000000", e.globalAlpha = .04, e.fill(), e.globalAlpha = 1), e.closePath()), this.T = t, e.save(), this.ka = K;
							var o = this.R();
							this.G && (e.globalAlpha *= 1 - o), e.lineWidth = 10, e.lineCap = "round", e.lineJoin = this.c ? "miter" : "round";
							var n = this.name.toLowerCase(),
								a = null,
								i = null,
								o = !1,
								r = this.color;
							if (skinsPremium = "venus,mercury,banana,birdie,apple,tiger,cookie,jupiter,halo,neptune,black hole,uranus,star ball,target,galaxy,breakfast,saturn,pluto,hot dog, heart, mouse,wolf,goldfish,piggie,blueberry,bomb,bowling,candy,frog,hamburger,nose,seal,panda,pizza,snowman,sun,baseball,basketball,bug,cloud,moo,tomato,mushroom,donuts,terrible,ghost,apple face,turtle,brofist,puppy,footprint,pineapple,zebra,toon,octopus,radar,eye,owl,virus,smile,army,cat,nuclear,toxic,dog,sad,facepalm,luchador,zombie,bite,crazy,hockey,brain,evil,pirate,evil eye,halloween,monster,scarecrow,spy".split(","), this.h || !ac || Cb || (-1 != dc.indexOf(n) ? (fa.hasOwnProperty(n) || (fa[n] = new Image, fa[n].src = c.ASSETS_ROOT + "skins/" + n + ".png"), a = 0 != fa[n].width && fa[n].complete ? fa[n] : null) : a = null, null != a ? -1 != Dc.indexOf(n) && (o = !0) : ("%starball" == this.C && "shenron" == n && 7 <= l.length && (Mb = o = !0, i = Qb("%starball1")), a = Qb(this.C), null != a && (r = tc(this.C) || r))), !this.c && mass > 9 && -1 != skinsPremium.indexOf(t) ? s = setPremiumSkin(t) : null, lb ? (e.fillStyle = "#FFFFFF", e.strokeStyle = "#AAAAAA") : (e.fillStyle = r, e.strokeStyle = r), t) e.beginPath(), e.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, !1);
							else
								for (this.ua(), e.beginPath(), r = this.H(), e.moveTo(this.a[0].x, this.a[0].y), n = 1; r >= n; ++n) {
									var s = n % r;
									e.lineTo(this.a[s].x, this.a[s].y)
								}
							if (":teams" == getGameMode() && (red = hexToRGB(e.fillStyle).r, green = hexToRGB(e.fillStyle).g, blue = hexToRGB(e.fillStyle).b, Math.max(red, green, blue) == red ? team = "red" : Math.max(red, green, blue) == green ? team = "green" : team = "blue"), vTE() && this.c && (e.globalAlpha = .9), gMM(itsme ? Math.min((gMM() + this.size * this.size / 100) / 2, this.size * this.size / 100) : gMM()), itsme && gMRM(this.size * this.size / 100), eCE() && pg() && this.size * this.size / 100 > 9 && (itsme && ":teams" == getGameMode() && "" == mTm() && mTm(Math.max(red, green, blue) == red ? "red" : Math.max(red, green, blue) == green ? "green" : "blue"), gMM() > 25 ? mass += 2.993 : !1, !itsme && !this.c && (":teams" !== getGameMode() || ":teams" == getGameMode() && mTm() != team))) {
								var f = ["strokeStyle", "#C70808", "#B2837F", "#05FF4E", "#05A34E", "#E8920C"];
								gMM() / mass < .42 ? e[f[0]] = f[1] : .84 > gMM() / mass > .42 ? e[f[0]] = f[2] : mass / gMM() < .42 ? e[f[0]] = f[3] : .84 > mass / gMM() > .42 ? e[f[0]] = f[4] : e[f[0]] = f[5]
							}
							e.closePath(), t || e.stroke(), e.fill(), null != a && (this.ia(e, a), null != i && this.ia(e, i, {
								alpha: Math.sin(.0174 * Fa)
							})), (lb || 15 < this.size) && !t && (e.strokeStyle = "#000000", e.globalAlpha *= .1, e.stroke()), e.globalAlpha = 1, a = -1 != l.indexOf(this), t = ~~this.y, fontSize = lNE() ? 1.2 * this.m() : this.m(), addY = lNE() ? 5 : 0, 0 != this.id && (Ja || a) && this.name && this.i && !o && (i = this.i, i.B("spy" == this.name.toLowerCase() ? "" : this.name), i.N(fontSize), o = 0 >= this.id ? 1 : Math.ceil(10 * h) / 10, i.ja(o), i = i.L(), n = Math.ceil(i.width / o), r = Math.ceil(i.height / o), e.drawImage(i, ~~this.x - ~~(n / 2), t - ~~(r / 2), n, r), t += i.height / 2 / o + 4), (sOME() && !itsme && "spy" != this.name.toLowerCase() && this.size * this.size / 100 > 9 || 0 < this.id && bc && (a || 0 == l.length && (!this.c || this.h) && 20 < this.size)) && (null == this.P && (this.P = new Ia(this.m() / 2, "#FFFFFF", !0, "#000000")), a = this.P, a.N(fontSize / 2), a.B(~~(this.size * this.size / 100)), o = Math.ceil(10 * h) / 10, a.ja(o), i = a.L(), n = Math.ceil(i.width / o), r = Math.ceil(i.height / o), e.drawImage(i, ~~this.x - ~~(n / 2), t - ~~(r / 2), n, r)), e.restore()
						}
					},
					ia: function(e, t, n) {
						e.save(), e.clip();
						var o = Math.max(this.size, this.ha);
						null != n && null != n.alpha && (e.globalAlpha = n.alpha), e.drawImage(t, this.x - o - 5, this.y - o - 5, 2 * o + 10, 2 * o + 10), e.restore()
					}
				};
				var ob = function(e) {
					function t(e, t, n) {
						return t > e ? t : e > n ? n : e
					}
					return e.fa = function(e, n) {
						var o;
						return o = t(.5, 0, 1), e + o * (n - e)
					}, e.Ba = t, e
				}({});
				c.Maths = ob, Ia.prototype = {
					F: "",
					U: "#000000",
					W: !1,
					X: "#000000",
					v: 16,
					j: null,
					V: null,
					l: !1,
					D: 1,
					N: function(e) {
						this.v != e && (this.v = e, this.l = !0)
					},
					ja: function(e) {
						this.D != e && (this.D = e, this.l = !0)
					},
					B: function(e) {
						e != this.F && (this.F = e, this.l = !0)
					},
					L: function() {
						if (null == this.j && (this.j = document.createElement("canvas"), this.V = this.j.getContext("2d")), this.l) {
							this.l = !1;
							var e = this.j,
								t = this.V,
								n = this.F,
								o = this.D,
								a = this.v,
								i = a + "px Ubuntu";
							t.font = i;
							var r = ~~ (.2 * a);
							e.width = (t.measureText(n).width + 6) * o, e.height = (a + r) * o, t.font = i, t.scale(o, o), t.globalAlpha = 1, t.lineWidth = 3, t.strokeStyle = this.X, t.fillStyle = this.U, this.W && t.strokeText(n, 3, a - r / 2), t.fillText(n, 3, a - r / 2)
						}
						return this.j
					}
				}, Date.now || (Date.now = function() {
					return (new Date).getTime()
				}),
					function() {
						for (var e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !c.requestAnimationFrame; ++t) c.requestAnimationFrame = c[e[t] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[e[t] + "CancelAnimationFrame"] || c[e[t] + "CancelRequestAnimationFrame"];
						c.requestAnimationFrame || (c.requestAnimationFrame = function(e) {
							return setTimeout(e, 1e3 / 60)
						}, c.cancelAnimationFrame = function(e) {
							clearTimeout(e)
						})
					}();
				var hc = {
					init: function(e) {
						function t(e) {
							return o > e && (e = o), e > i && (e = i), ~~ ((e - o) / 32)
						}

						function n(e) {
							return a > e && (e = a), e > r && (e = r), ~~ ((e - a) / 32)
						}
						var o = e.sa,
							a = e.ta,
							i = e.qa,
							r = e.ra,
							s = ~~ ((i - o) / 32) + 1,
							l = ~~ ((r - a) / 32) + 1,
							c = Array(s * l);
						return {
							na: function(e) {
								var o = t(e.x) + n(e.y) * s;
								null == c[o] ? c[o] = e : Array.isArray(c[o]) ? c[o].push(e) : c[o] = [c[o], e]
							},
							xa: function(e, o, a, i, r) {
								var l = t(e),
									f = n(o);
								for (e = t(e + a), o = n(o + i); o >= f; ++f)
									for (i = l; e >= i; ++i)
										if (a = c[i + f * s], null != a)
											if (Array.isArray(a))
												for (var u = 0; u < a.length; u++) r(a[u]);
											else r(a)
							}
						}
					}
				}, Fb = function() {
					var e = new ca(0, 0, 0, 32, "#ED1C24", ""),
						t = document.createElement("canvas");
					t.width = 32, t.height = 32;
					var n = t.getContext("2d");
					return function() {
						0 < l.length && (e.color = l[0].color, e.A(l[0].name)), n.clearRect(0, 0, 32, 32), n.save(), n.translate(16, 16), n.scale(.4, .4), e.w(n), n.restore();
						var o = document.getElementById("favicon"),
							a = o.cloneNode(!0);
						a.setAttribute("href", t.toDataURL("image/png")), o.parentNode.replaceChild(a, o)
					}
				}();
				e(function() {
					Fb()
				});
				var Ka = {
					context: null,
					defaultProvider: "facebook",
					loginIntent: "0",
					userInfo: {
						socialToken: null,
						tokenExpires: "",
						level: "",
						xp: "",
						xpNeeded: "",
						name: "",
						picture: "",
						displayName: "",
						loggedIn: "0",
						socialId: ""
					}
				}, g = c.defaultSt = Ka;
				c.storageInfo = g, c.createDefaultStorage = vc, c.updateStorage = La, e(function() {
					null != c.localStorage.storeObjectInfo && (g = JSON.parse(c.localStorage.storeObjectInfo)), "1" == g.loginIntent && Rb(g.context), "" == g.userInfo.name && "" == g.userInfo.displayName || Sb(g.userInfo)
				}), c.checkLoginStatus = function() {
					"1" == g.loginIntent && (Ma(), Rb(g.context))
				};
				var Ma = function() {
					c.MC.setProfilePicture(g.userInfo.picture), c.MC.setSocialId(g.userInfo.socialId)
				};
				c.logout = function() {
					g = Ka, delete c.localStorage.storeObjectInfo, c.localStorage.storeObjectInfo = JSON.stringify(Ka), La(), ec(), p.cache.sentGameServerLogin = !1, delete p.cache.login_info, e("#helloContainer").attr("data-logged-in", "0"), e("#helloContainer").attr("data-has-account-data", "0"), e(".timer").text(""), e("#gPlusShare").hide(), e("#fbShare").show(), e("#user-id-tag").text(""), Q(), c.MC.doLogout()
				}, c.toggleSocialLogin = function() {
					e("#socialLoginContainer").toggle(), e("#settings").hide(), e("#instructions").hide(), Tb()
				}, c.toggleSettings = function() {
					e("#settings").toggle(), e("#socialLoginContainer").hide(), e("#instructions").hide(), Tb()
				}, p.account = function(t) {
					function n() {}

					function o() {
						console.log("got user login")
					}
					return t.init = function() {
						p.core.bind("user_login", o), p.core.bind("user_logout", n)
					}, t.setUserData = function(e) {
						Sb(e)
					}, t.setAccountData = function(t, n) {
						var o = e("#helloContainer").attr("data-has-account-data", "1");
						g.userInfo.xp = t.xp, g.userInfo.xpNeeded = t.xpNeeded, g.userInfo.level = t.level, La(), o && n ? ea(t) : (e(".agario-profile-panel .progress-bar-star").text(t.level), e(".agario-exp-bar .progress-bar-text").text(t.xp + "/" + t.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * t.xp / t.xpNeeded).toFixed(2) + "%"))
					}, t.za = function(e) {
						ea(e)
					}, t
				}({});
				var Vb = 0;
				c.fbAsyncInit = function() {
					function e() {
						null == c.FB ? alert("You seem to have something blocking Facebook on your browser, please check for any extensions") : (g.loginIntent = "1", c.updateStorage(), c.FB.login(function(e) {
							Ub(e)
						}, {
							scope: "public_profile, email"
						}))
					}
					c.FB.init({
						appId: A.fb_app_id,
						cookie: !0,
						xfbml: !0,
						status: !0,
						version: "v2.2"
					}), ("1" == c.storageInfo.loginIntent && "facebook" == c.storageInfo.context || $b) && c.FB.getLoginStatus(function(t) {
						"connected" === t.status ? Ub(t) : "not_authorized" === t.status ? (c.logout(), e()) : c.logout()
					}), c.facebookRelogin = e, c.facebookLogin = e
				};
				var pb = !1;
				! function(t) {
					function n() {
						var e = document.createElement("script");
						e.type = "text/javascript", e.async = !0, e.src = "//apis.google.com/js/client:platform.js?onload=gapiAsyncInit";
						var t = document.getElementsByTagName("script")[0];
						t.parentNode.insertBefore(e, t), a = !0
					}
					var o = {}, a = !1;
					return c.gapiAsyncInit = function() {
						e(o).trigger("initialized")
					}, t.google = {
						oa: function() {
							n()
						},
						ma: function(e, t) {
							c.gapi.client.load("plus", "v1", function() {
								console.log("fetching me profile"), gapi.client.plus.people.get({
									userId: "me"
								}).execute(function(e) {
									t(e)
								})
							})
						}
					}, t.wa = function(t) {
						a || n(), "undefined" != typeof gapi ? t() : e(o).bind("initialized", t)
					}, t
				}(p);
				var Ec = function(t) {
					function n(e) {
						c.MC.doLoginWithGPlus(e), p.cache.login_info = [e, "google"], p.I.M(e, "google")
					}

					function o(t) {
						g.userInfo.picture = t, e(".agario-profile-picture").attr("src", t)
					}
					var a = null,
						i = {
							client_id: A.gplus_client_id,
							cookie_policy: "single_host_origin",
							scope: "profile email"
						};
					return t.ea = {
						Y: function() {
							return a
						},
						init: function() {
							var e = this,
								t = g && "1" == g.loginIntent && "google" == g.context;
							p.wa(function() {
								c.gapi.ytsubscribe.go("agarYoutube"), c.gapi.load("auth2", function() {
									a = c.gapi.auth2.init(i), a.attachClickHandler(document.getElementById("gplusLogin"), {}, function(e) {
										console.log("googleUser : " + e)
									}, function(e) {
										console.log("failed to login in google plus: ", JSON.stringify(e, void 0, 2))
									}), a.currentUser.listen(_.bind(e.va, e)), t && 1 == a.isSignedIn.get() && a.signIn()
								})
							})
						},
						va: function(e) {
							if (a && e && a.isSignedIn.get() && !pb) {
								pb = !0, g.loginIntent = "1";
								var t = e.getAuthResponse(),
									i = t.access_token;
								c.Y = t, console.log("loggedIn with G+!");
								var r = e.getBasicProfile();
								e = r.getImageUrl(), void 0 == e ? p.google.ma(t, function(e) {
									e.result.isPlusUser ? (e && o(e.image.url), n(i), e && (g.userInfo.picture = e.image.url), g.userInfo.socialId = r.getId(), Ma()) : (alert("Please add Google+ to your Google account and try again.\nOr you can login with another account."), c.logout())
								}) : (o(e), g.userInfo.picture = e, g.userInfo.socialId = r.getId(), Ma(), n(i)), g.context = "google", c.updateStorage()
							}
						},
						pa: function() {
							a && (a.signOut(), pb = !1)
						}
					}, t
				}(p);
				c.gplusModule = Ec;
				var ec = function() {
					p.ea.pa()
				};
				c.logoutGooglePlus = ec;
				var Cc = function() {
					function t(e, t, n, o, a) {
						var i = t.getContext("2d"),
							r = t.width;
						t = t.height, e.color = a, e.A(n), e.size = o, i.save(), i.translate(r / 2, t / 2), e.w(i), i.restore()
					}
					for (var n = new ca(-1, 0, 0, 32, "#5bc0de", ""), o = new ca(-1, 0, 0, 32, "#5bc0de", ""), a = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "), i = [], r = 0; r < a.length; ++r) {
						var s = r / a.length * 12,
							l = 30 * Math.sqrt(r / a.length);
						i.push(new ca(-1, Math.cos(s) * l, Math.sin(s) * l, 10, a[r], ""))
					}
					uc(i);
					var c = document.createElement("canvas");
					return c.getContext("2d"), c.width = c.height = 70, t(o, c, "", 26, "#ebc0de"),
						function() {
							e(".cell-spinner").filter(":visible").each(function() {
								var o = e(this),
									a = Date.now(),
									i = this.width,
									r = this.height,
									s = this.getContext("2d");
								s.clearRect(0, 0, i, r), s.save(), s.translate(i / 2, r / 2);
								for (var l = 0; 10 > l; ++l) s.drawImage(c, (.1 * a + 80 * l) % (i + 140) - i / 2 - 70 - 35, r / 2 * Math.sin((.001 * a + l) % Math.PI * 2) - 35, 70, 70);
								s.restore(), (o = o.attr("data-itr")) && (o = S(o)), t(n, this, o || "", +e(this).attr("data-size"), "#5bc0de")
							}), e("#statsPellets").filter(":visible").each(function() {
								e(this);
								var n = this.width,
									o = this.height;
								for (this.getContext("2d").clearRect(0, 0, n, o), n = 0; n < i.length; n++) t(i[n], this, "", i[n].size, i[n].color)
							})
						}
				}();
				c.createParty = function() {
					ia(":party"), T = function(t) {
						jb("/#" + c.encodeURIComponent(t)), e(".partyToken").val("agar.io/#" + c.encodeURIComponent(t)), e("#helloContainer").attr("data-party-state", "1")
					}, Q()
				}, c.joinParty = xb, c.cancelParty = function() {
					jb("/"), e("#helloContainer").attr("data-party-state", "0"), ia(""), Q()
				};
				var C = [],
					cb = 0,
					db = "#000000",
					aa = !1,
					xa = !1,
					Gb = 0,
					Wb = 0,
					fb = 0,
					eb = 0,
					X = 0,
					Yb = !0;
				c.onPlayerDeath = Hb, setInterval(function() {
					xa && C.push(Nb() / 100)
				}, 1e3 / 60), setInterval(function() {
					var e = xc();
					0 != e && (++fb, 0 == X && (X = e), X = Math.min(X, e))
				}, 1e3), c.closeStats = function() {
					aa = !1, e("#stats").hide(), c.destroyAd(c.adSlots.ab), sa(0)
				}, c.setSkipStats = function(e) {
					Yb = !e
				}, c.getStatsString = Zb, c.gPlusShare = zc, c.twitterShareStats = function() {
					var e = c.getStatsString("g_plus_share_stats");
					c.open("https://twitter.com/intent/tweet?text=" + e, "Agar.io", "width=660,height=310,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (c.screenX + c.innerWidth / 2 - 330) + ",top=" + (c.innerHeight - 310) / 2)
				}, c.fbShareStats = function() {
					var e = c.getStatsString("fb_matchresults_subtitle");
					c.FB.ui({
						method: "feed",
						display: "iframe",
						name: S("fb_matchresults_title"),
						caption: S("fb_matchresults_description"),
						description: e,
						link: "http://agar.io",
						Fa: "http://static2.miniclipcdn.com/mobile/agar/Agar.io_matchresults_fb_1200x630.png",
						ya: {
							name: "play now!",
							link: "http://agar.io"
						}
					})
				}, c.fillSocialValues = function(e, t) {
					1 == c.isChrome && "google" == c.storageInfo.context && c.gapi.interactivepost.render(t, {
						contenturl: A.game_url,
						clientid: A.gplus_client_id,
						cookiepolicy: "http://agar.io",
						prefilltext: e,
						calltoactionlabel: "BEAT",
						calltoactionurl: A.game_url
					})
				}, e(function() {
					e(fc), "MAsyncInit" in c && c.MAsyncInit()
				}), jQuery(function() {
					localStorage ? (window.default_r_options = {
						option_no_skins: !1,
						option_no_names: !1,
						option_no_colors: !1,
						option_show_mass: !1,
						option_dark_theme: !1,
						option_skip_stats: !1,
						option_show_borders: !1,
						option_extra_zoom: !1,
						option_show_others_mass: !1,
						option_extended_colors: !1,
						option_virus_transparency: !1,
						option_large_names: !1,
						option_no_grid: !1,
						option_show_my_range: !1,
						option_show_virus_range: !1,
						option_merge_time: !1,
						option_last_died: !1,
						option_minimap: !1,
						botsFollow: "mouse",
					}, "undefined" != typeof localStorage.r_options && isJSON(localStorage.r_options) ? (r_options_NEW = JSON.parse(localStorage.r_options), jQuery.each(default_r_options, function(e, t) {
						"undefined" == typeof r_options_NEW[e] && (r_options_NEW[e] = default_r_options[e])
					}), jQuery.each(r_options_NEW, function(e, t) {
						"undefined" == typeof default_r_options[e] && delete r_options_NEW[e]
					}), localStorage.r_options != r_options_NEW && (localStorage.r_options = JSON.stringify(r_options_NEW))) : localStorage.r_options = JSON.stringify(default_r_options), r_options = JSON.parse(localStorage.r_options), jQuery.each(r_options, function(index, value) {
						void 0 == value && "botsFollow" == index || void 0 == value && (value = !1), "boolean" == typeof value ? (jQuery("input", jQuery("[data-itr='" + index + "']").parent())[0].checked = value, 1 == value && (fnc = jQuery("input", jQuery("[data-itr='" + index + "']").parent()).attr("onchange"), fnf = "option_no_names" == index || "option_no_skins" == index ? "!" : "", fnc = fnc.substr(0, fnc.indexOf("(")) + "(" + fnf + value + ");", eval(fnc))) : "nick" == index ? (jQuery("#nick").val(r_options.nick), setSkin(r_options.nick)) : "botsNick" == index ? jQuery("#botsNick").val(r_options.botsNick) : "botsFollow" == index && ("mouse" == r_options.botsFollow ? (jQuery("[name='botsFollow']:first").removeAttr("checked"), jQuery("[name='botsFollow']:nth(1)").attr("checked", "")) : (jQuery("[name='botsFollow']:nth(1)").removeAttr("checked"), jQuery("[name='botsFollow']:first").attr("checked", "")))
					})) : console.log("You need to enable localStorage or download a new browser to remember options.")
				})
			}
		}
	}
}(window, window.jQuery);
