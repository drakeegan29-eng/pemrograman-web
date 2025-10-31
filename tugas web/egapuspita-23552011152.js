document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('egapuspita-23552011152.js');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let nama = document.getElementById('nama');
        let email = document.getElementById('email');
        let nim = document.getElementById('nim');
        let telp = document.getElementById('telp');
        let univ = document.getElementById('univ');
        let prodi = document.getElementById('prodi');
        let agree = document.getElementById('agree');

        let errNama = document.getElementById('err-nama');
        let errEmail = document.getElementById('err-email');
        let errNim = document.getElementById('err-nim');
        let errTelp = document.getElementById('err-telp');
        let errUniv = document.getElementById('err-univ');
        let errProdi = document.getElementById('err-prodi');
        let errAgree = document.getElementById('err-agree');

        document.querySelectorAll('.error').forEach(e => e.textContent = '');
        document.querySelectorAll('.error-border').forEach(e => e.classList.remove('error-border'));

        let valid = true;

        // nama
        if (nama.value.trim() === '') {
            errNama.textContent = 'Nama lengkap harus diisi';
            nama.classList.add('error-border');
            valid = false;
        }

        // email
        if (email.value.trim() === '') {
            errEmail.textContent = 'Email harus diisi';
            email.classList.add('error-border');
            valid = false;
        } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value)) {
            errEmail.textContent = 'Format email tidak valid';
            email.classList.add('error-border');
            valid = false;
        }

        // nim
        if (nim.value.trim() === '') {
            errNim.textContent = 'NIM harus diisi';
            nim.classList.add('error-border');
            valid = false;
        } else if (!/^[0-9]+$/.test(nim.value)) {
            errNim.textContent = 'Input harus berupa angka, bukan huruf atau simbol';
            nim.classList.add('error-border');
            valid = false;
        }

        // telp
        if (telp.value.trim() === '') {
            errTelp.textContent = 'Nomor telepon harus diisi';
            telp.classList.add('error-border');
            valid = false;
        } else if (!/^[0-9]+$/.test(telp.value)) {
            errTelp.textContent = 'Input harus berupa angka, bukan huruf atau simbol';
            telp.classList.add('error-border');
            valid = false;
        }

        // universitas
        if (univ.value === '') {
            errUniv.textContent = 'Universitas harus dipilih';
            univ.classList.add('error-border');
            valid = false;
        }

        // prodi
        if (prodi.value === '') {
            errProdi.textContent = 'Program studi harus dipilih';
            prodi.classList.add('error-border');
            valid = false;
        }

        // checkbox
        if (!agree.checked) {
            errAgree.textContent = 'Harap setujui syarat dan ketentuan';
            valid = false;
        }

        // jika semua valid
        if (valid) {
            alert('Pendaftaran berhasil!');
            form.reset();
        }
    });
});
