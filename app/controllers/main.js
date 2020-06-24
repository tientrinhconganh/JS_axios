var nguoiDungService = new NguoiDungService();

getListUser();

function themNguoiDung(){
  console.log("them nguoi dung them 2");
}
function getListUser() {
  nguoiDungService
    .layDanhSachNguoiDung()
    .then(function (result) {
      renderTable(result.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function renderTable(arr) {
  var contentHTML = "";
  arr.forEach(function (item, index) {
    contentHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>${item.maLoaiNguoiDung}</td>
                <td>
                    <button class="btn btn-info" onclick="editUser(${item.id})" data-toggle="modal" data-target="#myModal">Sua</button>
                    <button class="btn btn-danger" onclick="deleteUser(${item.id})">Xoa</button>
                </td>
            </tr>
        `;
  });

  getEle("tblDanhSachNguoiDung").innerHTML = contentHTML;
}

getEle("btnThemNguoiDung").addEventListener("click", function () {
  var footer =
    "<button class='btn btn-success' onclick='addUser()'>Add user</button>";

  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add User";

  getEle("TaiKhoan").removeAttribute("disabled");
});

/**
 * 
 * editUser
 */
function editUser(id) {
  // getEle("btnThemNguoiDung").addEventListener("click", function () {
  //   var footer =
  //     "<button class='btn btn-success' onclick='addUser()'>Update</button>";

  //   document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  //   document.getElementsByClassName("modal-title")[0].innerHTML = "Update User";
  // }
  var footer = `<button class='btn btn-success' onclick="updateUser(${id})">Update</button>`;
  console.log(document.getElementsByClassName("modal-footer")[0]);
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  console.log(1);
  document.getElementsByClassName("modal-title")[0].innerHTML = "Update User";

  nguoiDungService.layThongTinNguoiDung(id)
    .then(function (result) {
      console.log(result.data);
      /**
       * do thong tin nguoi dung
       */
      getEle("TaiKhoan").value=result.data.taiKhoan;
      getEle("TaiKhoan").setAttribute("disabled",true);
      getEle("HoTen").value=result.data.hoTen;
      getEle("MatKhau").value=result.data.matKhau;
      getEle("Email").value=result.data.email;
      getEle("SoDienThoai").value=result.data.soDT;
      getEle("loaiNguoiDung").value=result.data.maLoaiNguoiDung;
    })
    .catch(function (err) {
      console.log(err);
    });
}
function updateUser(id){
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var soDT = getEle("SoDienThoai").value;
  var loaiNguoiDung = getEle("loaiNguoiDung").value;

  var user=new NguoiDung(taiKhoan,hoTen,matKhau,email,soDT,loaiNguoiDung);
  console.log(user);
  nguoiDungService.capNhatNguoiDung(id,user)
  .then(function(resuft){
    alert("update success");
    getListUser();
  })
  .catch(function(err){
    console.log(err);
  });
}
/**
 * deleteUser
 */
function deleteUser(id) {
  console.log(id);
  nguoiDungService.xoaNguoiDung(id)
    .then(function (result) {
      alert(result);
      getListUser(result)
    })
    .catch(function (err) {
      console.log(err);
    });
}
/**
 * AddUser
 */
function addUser() {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var soDT = getEle("SoDienThoai").value;
  var loaiNguoiDung = getEle("loaiNguoiDung").value;

  var user = new NguoiDung(
    taiKhoan,
    hoTen,
    matKhau,
    email,
    soDT,
    loaiNguoiDung
  );

  nguoiDungService
    .themNguoiDung(user)
    .then(function (result) {
      getListUser();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getEle(id) {
  return document.getElementById(id);
}
