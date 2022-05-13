var checkValid = function () {
    var valid = true;
    valid =
      kiemTraRong("taikhoan", "error__tk") &
      kiemTraRong("matkhau", "error__mk");
    if (valid) {
      alert('Đăng Nhập thành công')
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
  