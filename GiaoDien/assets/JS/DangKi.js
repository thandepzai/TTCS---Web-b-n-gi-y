var checkValid = function () {
    var valid = true;
    valid =
      kiemTraRong("taikhoan", "error__tk") &
      kiemTraRong("matkhau", "error__mk") &
      kiemTraRong("checkmk", "error__lmk");
    valid &= kiemTraDinhDang("#matkhau", "error__DinhDang")& kiemTraTrungMK('#matkhau','#checkmk','error__LapMK');
    if (valid) {
      alert('Đăng Ký thành công')
    }
  };
  
  var kiemTraRong = function (selectorValue, selectorError) {
    var inputText = document.getElementById(selectorValue);
  
    if (inputText.value.trim() === "") {
      document.getElementById(selectorError).innerHTML =
        inputText.name + " Không được bỏ trống";
      document.getElementById(selectorError).style.display = "block";
      return false;
    } else {
      document.getElementById(selectorError).innerHTML = "";
      return true;
    }
  };
  var kiemTraDinhDang = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    var format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!inputText.value.match(format)) {
      document.getElementById(selectorError).innerHTML =
      inputText.name + "Nhập đúng định dạng mật khẩu";
      return false;
    }
    else {
      document.getElementById(selectorError).innerHTML = "";
      return true;
    }
  };
  var kiemTraTrungMK = function (selectorValue1,selectorValue2, selectorError) {
    var inputText = document.querySelector(selectorValue1);
    var inputText2 = document.querySelector(selectorValue2);
    if (inputText.value===inputText2.value) {
      document.getElementById(selectorError).innerHTML = "";
      return true;
    }
    else {
      document.getElementById(selectorError).innerHTML =
      inputText.name + "Không khớp với mật khẩu";
      return false;
    }
  };
  
  document.getElementById("btn___dk").onclick = checkValid;
  