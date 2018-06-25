import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PatoldPage } from '../patold/patold';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public isSearchbarOpened = false;
  dokterAnak: { name: string; jdwl:string; img:string }[];
  dokterMata: { name: string; jdwl:string; img:string }[];
  dokterBedah: { name: string; jdwl:string; img:string }[];
  dokterSyaraf: { name: string; jdwl:string; img:string }[];
  dokterObgyn: { name: string; jdwl:string; img:string }[];
  dokterInternist: { name: string; jdwl:string; img:string }[];
  dokterOrtho: { name: string; jdwl:string; img:string }[];
  dokterParu: { name: string; jdwl:string; img:string }[];
  dokterKulit: { name: string; jdwl:string; img:string }[];
  dokterGigi: { name: string; jdwl:string; img:string }[];
  dokterTHT: { name: string; jdwl:string; img:string }[];
  dokterRehab: { name: string; jdwl:string; img:string }[];
  dokterRadiologi: { name: string; jdwl:string; img:string }[];


  constructor(public navCtrl: NavController) {
    this.initializeDokterAnak();
    this.initializeDokterMata();
    this.initializeDokterBedah();
    this.initializeDokterSyaraf();
    this.initializeDokterObgyn();
    this.initializeDokterInternist();
    this.initializeDokterOrtho();
    this.initializeDokterParu();
    this.initializeDokterKulit();
    this.initializeDokterGigi();
    this.initializeDokterTHT();
    this.initializeDokterRehab();
    this.initializeDokterRadiologi();
  }

  initializeDokterAnak(){
    this.dokterAnak = [
      { name: 'DR.dr. Soedjatmiko, Sp.A (K), Msi', jdwl: 'Senin s/d Jumat : 16.30-18.00', img: 'assets/imgs/index.png'},
      { name: 'dr. Budi Yudono, Sp.A', jdwl: 'Selasa, Kamis dan Jumat : 18.00-20.00', img: 'assets/imgs/index.png'},
      { name: 'dr. Siti Rozanah, Sp.A', jdwl: 'Senin dan Rabu : 18.00-20.00 ; Sabtu : 11.00-13.00', img: 'assets/imgs/index2.png'},
      { name: 'dr. Djundu’ah, Sp.A', jdwl: 'Senin, Kamis dan Jumat : 09.00-13.00 ; Selasa : 16.00-20.00 ; Rabu : 10.00-13.00', img: 'assets/imgs/index2.png'},
      { name: 'dr. Etty Christiati, Sp.A', jdwl: 'Senin s/d Sabtu : 19.00-selesai', img: 'assets/imgs/index2.png'},
      { name: 'dr. Masyitha, Sp.A', jdwl: 'Senin, Kamis dan Jumat : 08.00-10.00', img: 'assets/imgs/index2.png'},
      { name: 'dr. Donny Ronaldo, Sp.A', jdwl: 'Senin s/d Sabtu : 09.00-11.00', img: 'assets/imgs/index.png'},
      { name: 'dr. Melisa Lilisari, Sp.A, M.Kes', jdwl: 'Selasa, Kamis dan Sabtu : 08.00-10.00', img: 'assets/imgs/index2.png'},
    ];
  }

  initializeDokterMata(){
    this.dokterMata = [
      { name: 'dr. Elisabeth Srisubekti, Sp.M', jdwl: 'Senin : 18.00-19.00; Selasa : 17.00-18.00; Jumat : 15.00-16.00', img: 'assets/imgs/index2.png'},
    ];
  }

  initializeDokterBedah(){
    this.dokterBedah = [
      { name: 'dr. Herry Wardani, Sp.B', jdwl: 'Senin, Rabu dan Jumat : 13.00-14.00', img: 'assets/imgs/index.png'},
      { name: 'dr. Ibadurahman, Sp.B', jdwl: 'Senin, Rabu dan Jumat : 15.00-20.00; Selasa dan Kamis : 13.00-20.00; Sabtu : 17.00-20.00', img: 'assets/imgs/index.png'},
    ];
  }

  initializeDokterSyaraf(){
    this.dokterSyaraf = [
      { name: 'dr. Hastari Soekardi, Sp.S', jdwl: 'Senin : 20.00-21.00; Kamis : 19.00-21.00; Sabtu : 08.00-09.30*', img: 'assets/imgs/index2.png'},
      { name: 'dr. Fitriani Nasution, Sp.S', jdwl: 'Selasa dan Kamis : 08.30-10.30', img: 'assets/imgs/index2.png'},
    ];
  }

  initializeDokterObgyn(){
    this.dokterObgyn = [
      { name: 'dr. Taufik Zain, Sp.OG (K)', jdwl: 'Senin, Selasa, Rabu dan Jumat : 08.00-11.00; Kamis : 08.00-12.00; Sabtu : 19.00-21.00', img: 'assets/imgs/index.png'},
      { name: 'dr. Tety Ernawati, Sp.OG', jdwl: 'Selasa, Rabu, Jumat dan Sabtu : 19.00-21.00', img: 'assets/imgs/index2.png'},
      { name: 'dr. M. Rejani, Sp.OG', jdwl: 'Kamis dan Jumat : 08.00-20.00 ; Sabtu : 08.00-14.00', img: 'assets/imgs/index.png'},
      { name: 'dr. Neni Anggraini, Sp.OG', jdwl: 'Selasa s/d Sabtu : 10.00-13.00', img: 'assets/imgs/index2.png'},
    ];
  }

  initializeDokterInternist(){
    this.dokterInternist = [
      { name: 'dr. Khaira Utia Yusrie, Sp.PD', jdwl: 'Senin, Rabu dan Jumat : 18.00-20.00', img: 'assets/imgs/index2.png'},
      { name: 'dr. E. Mudjaddid, Sp.PD-Kpsi', jdwl: 'Selasa, Kamis dan Sabtu : 18.00-20.00', img: 'assets/imgs/index.png'},
      { name: 'dr. Tito Ardi Suwandoko, Sp.PD, FINASIM', jdwl: 'Senin s/d Sabtu : 09.00-13.00', img: 'assets/imgs/index.png'},
    ];
  }

  initializeDokterParu(){
    this.dokterParu = [
      { name: 'dr. Yenni Sari Siregar, Sp.P', jdwl: 'Senin dan Jumat : 18.00-20.00', img: 'assets/imgs/index2.png'},
      { name: 'dr. Mukhtar Ikhsan, Sp.P(K), MARS', jdwl: 'Rabu : 18.00-20.00; Sabtu : 10.00-12.00', img: 'assets/imgs/index.png'},
      { name: 'dr. Iin Rahmania Inayatillah, Sp.P', jdwl: 'Selasa dan Kamis : 18.00-20.00', img: 'assets/imgs/index2.png'},
    ];
  }

  initializeDokterOrtho(){
    this.dokterOrtho = [
      { name: 'dr. A. Arya Abikara, Sp.OT', jdwl: 'Selasa : 19.00-20.00*; Sabtu : 14.00-15.00*', img: 'assets/imgs/index.png'},
    ];
  }

  initializeDokterKulit(){
    this.dokterKulit = [
      { name: 'dr. Putri Ramadhani L,Sp.KK', jdwl: 'Rabu dan Jumat : 17.30-19.00', img: 'assets/imgs/index2.png'},
      { name: 'dr. Rahmatina, Sp.KK', jdwl: 'Senin dan Jumat : 09.00-10.30', img: 'assets/imgs/index2.png'},
    ];
  }

  initializeDokterGigi(){
    this.dokterGigi = [
      { name: 'drg. Jenni. B.Ultrisza', jdwl: 'Senin dan Kamis : 13.00-17.00', img: 'assets/imgs/index2.png'},
      { name: 'drg. Vastya Ihsani, Sp.KG', jdwl: 'Rabu : 14.00-17.00; Jumat : 14.00-21.00', img: 'assets/imgs/index2.png'},
      { name: 'drg. Erry', jdwl: 'Selasa dan Rabu : 08.00-13.00', img: 'assets/imgs/index2.png'},
      { name: 'drg. Sri Junani RS', jdwl: 'Kamis : 09.00-13.00 ; Sabtu : 10.00-14.00', img: 'assets/imgs/index2.png'},
      { name: 'drg. Esti Puspita Sari', jdwl: 'Selasa dan Sabtu : 18.00-21.00', img: 'assets/imgs/index2.png'},
      { name: 'drg. Fiqqa Hendrayekti', jdwl: 'Senin : 09.00-12.00; Kamis : 18.00-21.00; Jumat : 09.00-13.00', img: 'assets/imgs/index2.png'},
      { name: 'drg. Saka Setiono Nugroho, Sp.BM', jdwl: 'Rabu : 18.00-21.00; Sabtu : 07.00-09.00', img: 'assets/imgs/index.png'},
      { name: 'drg. Anastasia Ririen Pramudyawati', jdwl: 'Senin : 18.00-21.00; Selasa : 13.00-17.00; Minggu : 10.00-16.00', img: 'assets/imgs/index2.png'},
    ];
  }

  initializeDokterTHT(){
    this.dokterTHT = [
      { name: 'dr. Adila Hisyam, Sp.THT', jdwl: 'Selasa dan Kamis : 10.00-12.00; Jumat : 16.00-18.00', img: 'assets/imgs/index2.png'},
      { name: 'dr. Farid Azis, Sp.THT', jdwl: 'Senin dan Kamis : 19.00-21.00; Rabu : 10.00-12.00; Kamis dan Sabtu : 19.00-21.00', img: 'assets/imgs/index.png'},
    ];
  }

  initializeDokterRehab(){
    this.dokterRehab = [
      { name: 'dr. Agus Prasetyo, Sp.KFR', jdwl: 'Senin s/d Kamis : 18.00-21.00', img: 'assets/imgs/index.png'},
    ];
  }

  initializeDokterRadiologi(){
    this.dokterRadiologi = [
      { name: 'dr. Galuh Ayu Treswari, Sp.Rad', jdwl: 'Selasa s/d Kamis : 18.00-21.00', img: 'assets/imgs/index2.png'},
      { name: 'dr. Sri Dewi Imayanti, Sp. Rad', jdwl: 'Senin, Rabu, Jumat dan Sabtu : 09.00-11.00', img: 'assets/imgs/index2.png'},
    ];
  }


  onSearch(event){
    console.log(event.target.value);
  }
  

  gotoAppointPage(){
    console.log("go to appointment");
    this.navCtrl.push(PatoldPage)
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeDokterAnak();
    this.initializeDokterMata();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.dokterAnak = this.dokterAnak.filter((dokterAnak) => {
        return (dokterAnak.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

    if (val && val.trim() != '') {
      this.dokterMata = this.dokterMata.filter((dokterMata) => {
        return (dokterMata.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }
  
}


