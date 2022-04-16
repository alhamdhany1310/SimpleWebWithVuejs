<template>
  <section class="jumbotron text-center">
    <img src="https://drive.google.com/uc?export=view&id=1y-u39uogesK0Z5vwCVt9JxG6Og85Y1Mj" alt="My Profil" width="200" class="rounded-circle img-thumbnail" />
    <h1 class="display-4">Maspuk Al Hamdani</h1>
    <p class="lead">Frond End Develover | Content Creator</p>
    <a href="" class="btn btn-danger text-white">Whatsapp Me</a>
  </section>

  <section id="bio">
    <div class="container">
      <div class="row text-center mb-3">
        <div class="col">
          <h2>My Bio</h2>
        </div>
      </div>
      <div class="row justify-content-center fs-5">
        <div class="col-md-4">
          <img src="https://drive.google.com/uc?export=view&id=1RUMuYKe_V55lr9TVn980waIsspHUP6a4" class="rounded float-start" style="width: 100%; height: auto" alt="..." />
        </div>
        <div class="col-md-5">
          <p>
            Assalamu’alaikum Wr.Wb, Halo perkenalkan nama saya Hamdhany, Saya berasal dari Lombok Timur Provinsi NTB, saya adalah anak ketiga dari lima bersaudara. saya senang belajar yang berkaitan dengan teknologi khususnya dalam bidang
            programming saya juga aktif di beberapa organisasi yang berkaitan dengan progrming dengan tujuan untuk meningkatkan skills saya dalam bidang programming
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="hobi">
    <div class="container">
      <div class="row text-center mb-3 text-white">
        <div class="col">
          <h2>My Hobies</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card text-white bg-dark mb-3 text-center">
            <div class="card-body">
              <i class="fa-solid fa-person-swimming"></i>
              <h5 class="card-title">Berenang</h5>
              <p class="card-text">Salah Satu hobi yang saya senangi dalam bidang olah raga adalah berenang.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-white bg-dark mb-3 text-center">
            <div class="card-body">
              <i class="fa-solid fa-film"></i>
              <h5 class="card-title">Film</h5>
              <p class="card-text">Nonton Film Adalah hobi yang bisa menghilangkan stres setelah ngoding</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-white bg-dark mb-3 text-center">
            <div class="card-body">
              <i class="fa-solid fa-music"></i>
              <h5 class="card-title">Music</h5>
              <p class="card-text">inilah salah satu hobi yang senantiasa menemani saat ngoding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row text-center mb-3">
        <div class="col">
          <h2>My Skill</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>HTML</h5>
          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
          </div>
          <h5>CSS</h5>
          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
          <h5>Javascript</h5>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <h5>MySQL</h5>
          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="friends">
    <div class="container">
      <div class="row text-center mb-3 text-white">
        <div class="col">
          <h2>My Close Friends</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table class="table table table-dark table-hover">
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th rowspan="4">Keterangan</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Gio Fany Ibnu Gandi</td>
              <td>Laki - Laki</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Tiara Indah Purnama</td>
              <td>Perempuan</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Abizar Maulana</td>
              <td>Laki - Laki</td>
            </tr>
            <tr>
              <td colspan="5"><center>Jumlah</center></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.jumbotron {
  padding: 6rem;
  background: url('https://drive.google.com/uc?export=view&id=1wKw8tSOpKjcOm1ET9FOOPSppwGH4CYwr');
  box-shadow: inset 0 0 2000px rgba(0, 0, 0, 0.9);
  color: #e2edff;
}
#hobi {
  background-color: #111;
}
#friends {
  background-color: #111;
}
section {
  padding: 5rem;
}
.card-body:hover {
  background: crimson;
  border-radius: 6px;
  transition: all 0.3s ease;
  transform: scale(1.05);
}
.card-body i {
  font-size: 50px;
  color: crimson;
  transition: color 0.3s ease;
}
.card-body:hover i {
  color: white;
}
</style>
