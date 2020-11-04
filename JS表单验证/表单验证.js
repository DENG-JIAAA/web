window.onload = function() {
	// 首先将所有用户输入框置为false，用户直接点击提交表单不会通过校验。
	var isUsernameOk = false;
	var isPasswordOk = false;
	var isPassword2Ok = false;
	var isEmailOk = false;

	// 获取用户名输入框对象
	var usernameObj = document.getElementById("username");
	// 用户名输入框 提示信息
	var usernameSpan = document.getElementById("usernameSpan");
	usernameObj.onblur = function() {
		var usernameValue = usernameObj.value;
		// 去除用户名前后空白
		usernameValue = usernameValue.trim();
		var usernameRegex = /^[a-zA-Z0-9]{6,14}$/;
		isUsernameOk = usernameRegex.test(usernameValue);
		if (usernameValue === "") {
			usernameSpan.innerText = "用户名不能为空";
		} else if (isUsernameOk) {
			usernameSpan.innerText = "√";
		} else {
			usernameSpan.innerText = "用户名由6-14位的数字或字母组成";
		}
	}
	usernameObj.onfocus = function() {
		usernameSpan.innerText = "";
	}

	
	// 获取密码输入框对象
	var passwordObj = document.getElementById("password");
	// 密码输入框 提示信息
	var passwordSpan = document.getElementById("passwordSpan");
	passwordObj.onblur = function() {
		var passwordValue = passwordObj.value;
		var passwordRegex = /^.{6,}$/;
		isPasswordOk = passwordRegex.test(passwordValue);
		if (passwordValue === "") {
			passwordSpan.innerText = "密码不能为空";
		} else if (!isPasswordOk) {
			passwordSpan.innerText = "密码最少6位";
		} else {
			passwordSpan.innerText = "√";
		}
	}
	passwordObj.onfocus = function() {
		passwordSpan.innerText = "";
	}

	
	// 获取确认密码输入框对象
	var password2Obj = document.getElementById("password2");
	// 密码确认框 提示信息
	var password2Span = document.getElementById("password2Span");
	password2Obj.onblur = function() {
		var passwordValue = document.getElementById("password").value;
		var password2Value = password2Obj.value;
		if (password2Value === "") {
			password2Span.innerText = "请再次输入以确认密码";
		} else if (passwordValue != password2Value) {
			password2Span.innerText = "两次输入的密码不一致，请重新输入。";
		} else {
			password2Span.innerText = "√";
			isPassword2Ok = true;
		}
	}
	password2Obj.onfocus = function() {
		// 如果确认密码和之前输入密码不一致
		if (password2Span.innerText != "√") {
			// 将确认密码框清空
			password2Obj.value = "";
		}
		password2Span.innerText = "";
	}

	
	// 获取邮箱输入框对象
	var emailObj = document.getElementById("email");
	// 邮箱输入框 提示信息
	var emailSpan = document.getElementById("emailSpan");
	emailObj.onblur = function() {
		var emailValue = emailObj.value;
		var emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		isEmailOk = emailRegex.test(emailValue);
		if (emailValue === "") {
			emailSpan.innerText = "请输入邮箱地址";
		} else if (!isEmailOk) {
			emailSpan.innerText = "输入的邮箱地址不合法，请重新输入。";
		} else {
			emailSpan.innerText = "√";
			isEmailOk = true;
		}
	}
	emailObj.onfocus = function() {
		emailSpan.innerText = "";
	}

	// 提交表单
	var submitObj = document.getElementById("submitButton");
	submitObj.onclick = function() {
		usernameObj.focus();
		usernameObj.blur();

		passwordObj.focus();
		passwordObj.blur();

		password2Obj.focus();
		password2Obj.blur();

		emailObj.focus();
		emailObj.blur();
		if (isUsernameOk && isPasswordOk && isPassword2Ok && isEmailOk) {
		/*if (usernameSpan.innerText == "√" && passwordSpan.innerText == "√"  && password2Span.innerText == "√" && emailSpan.innerText == "√") 
		{*/
			// 表单校验全部通过的话,调用form表单的submit()方法提交表单。
			document.getElementById("userForm").submit();
		}
	}
}