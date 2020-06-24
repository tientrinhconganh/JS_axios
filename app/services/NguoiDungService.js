//https://5eea03d3b13d0a00164e408a.mockapi.io/api/NguoiDung
//https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung
function NguoiDungService() {
  this.layDanhSachNguoiDung = function() {
    return axios({
      url: "https://5eea03d3b13d0a00164e408a.mockapi.io/api/NguoiDung",
      method: "GET"
    });
  };

  this.themNguoiDung = function(user) {
    return axios({
      url: "https://5eea03d3b13d0a00164e408a.mockapi.io/api/NguoiDung",
      method: "POST",
      data: user
    });
  };

  this.xoaNguoiDung=function(id){
    return axios({
      url: `https://5eea03d3b13d0a00164e408a.mockapi.io/api/NguoiDung/${id}`,
      method: "DELETE",
    });

  };
  this.layThongTinNguoiDung=function(id){
    return axios({
      url: `https://5eea03d3b13d0a00164e408a.mockapi.io/api/NguoiDung/${id}`,
      method: "GET",
    });
  };
  this.capNhatNguoiDung=function(id,user){
    return axios({
      url: `https://5eea03d3b13d0a00164e408a.mockapi.io/api/NguoiDung/${id}`,
      method: "PUT",
      data: user,
    });
  }
}
//tim kiem 
/**
 * luu vao locaologic
 * bang defaul
 */
