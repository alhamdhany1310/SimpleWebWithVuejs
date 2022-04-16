<template>
  <section id="kontak">
    <div class="container">
      <div class="row text-center mb-3">
        <div class="col">
          <h2>Contact Me</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-8">
          <form>
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-3">
                  <input type="text" class="form-control" id="exampleInputNama" aria-describedby="namaHelp" placeholder="Nama" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Subject" />
            </div>
            <div class="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="btn btn-danger">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  padding: 5rem;
}
</style>
