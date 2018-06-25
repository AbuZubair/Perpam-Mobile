import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the PatnewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-patnew',
  templateUrl: 'patnew.html',
})
export class PatnewPage {

  @ViewChild('uname') user;
  @ViewChild('password') password;
  patnewList : FirebaseListObservable<any>;
  pasienbaru = {
    uname:'',
    pwd:'',
    name: '',
    jk:'',
    tl:'',
    myDate:'',
    ns:'',
    almt:'',
    sCity:'',
    sDistrict:'',
    sKlh:'',
    kp:'',
    no:'',
    agama:''
  };
  
  
  private todo : FormGroup;
  selectedKlhs: { id: number; name: string; city_id: number; district_id: number; }[];
  selectedDistricts: { id: number; name: string; city_id: number; city_name: string; }[];
  klhs: { id: number; name: string; city_id: number; district_id: number; }[];
  districts: { id: number; name: string; city_id: number; city_name: string; }[];
  city: { id: number; name: string; }[];

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, 
    private formBuilder: FormBuilder, public toastCtrl: ToastController) {
    //this.patnewList = db.list(`pasienbaru/${auth.uid}`);
    this.initializeCity();
    this.initializeDistrict();
    this.initializeKlh();
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      jk:[],
      tl:['', Validators.required],
      myDate:['', Validators.required],
      ns:[],
      almt:['', Validators.required],
      sCity:[],
      sDistrict:[],
      //sKlh:[],
      kp:['', Validators.required],
      no:['', Validators.required],
      agama:['', Validators.required]
    });
    
  }

  logForm(){
    console.log(this.todo.value)
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Your Data Succesfully Submit',
      duration: 2500,
      position: position
    });

    toast.present(toast);
}

  createPatient(name,jk,tl,myDate,ns,almt,sCity,sDistrict,sKlh,kp,no,agama){
    this.fire.authState.take(1).subscribe(auth => {
      this.db.list(`pasienbaru/${auth.uid}`).push({
        name : name,
        jk : jk,
        tl : tl,
        myDate : myDate,
        ns : ns,
        almt : almt,
        sCity : sCity,
        sDistrict : sDistrict,
        sKlh : sKlh,
        kp : kp,
        no : no,
        agama : agama,
      }).then(newPatient => {
        this.navCtrl.push(HomePage)
      },error=>{console.log(error);})
  })
}

  initializeCity(){
    this.city = [
        {id: 1, name: 'Jakarta Barat'},
        {id: 2, name: 'Jakarta Pusat'},
        {id: 3, name: 'Jakarta Selatan'},
        {id: 4, name: 'Jakarta Timur'},
        {id: 5, name: 'Jakarta Utara'},
        {id: 6, name: 'Kepulauan Seribu'},
        {id: 7, name: 'Kabupaten Lebak'},
        {id: 8, name: 'Kabupaten Pandeglang'},
        {id: 9, name: 'Kabupaten Serang'},
        {id: 10, name: 'Kabupaten Tangerang'},
        {id: 11, name: 'Kota Cilegon'},
        {id: 12, name: 'Kota Serang'},
        {id: 13, name: 'Kota Tangerang'},
        {id: 14, name: 'Kota Tangerang Selatan'}
    ];
    }

    initializeDistrict(){
    this.districts = [
        {id: 1, name: 'Cengkareng', city_id: 1, city_name: 'Jakarta Barat'},
        {id: 2, name: 'Grogol Petamburan', city_id: 1, city_name: 'Jakarta Barat'},
        {id: 3, name: 'Kalideres', city_id: 1, city_name: 'Jakarta Barat'},
        {id: 4, name: 'Kebon Jeruk', city_id: 1, city_name: 'Jakarta Barat'},
        {id: 5, name: 'Kembangan', city_id: 1, city_name: 'Jakarta Barat'},
        {id: 6, name: 'Palmerah', city_id: 1, city_name: 'Jakarta Barat'},
        {id: 7, name: 'Taman Sari', city_id: 1, city_name: 'Jakarta Barat'},
        {id: 8, name: 'Tambora', city_id: 1, city_name: 'Jakarta Barat'},
        {id: 9, name: 'Gambir', city_id: 2, city_name: 'Jakarta Pusat'},
        {id: 10, name: 'Tanah Abang', city_id: 2, city_name: 'Jakarta Pusat'},
        {id: 11, name: 'Menteng', city_id: 2, city_name: 'Jakarta Pusat'},
        {id: 12, name: 'Senen', city_id: 2, city_name: 'Jakarta Pusat'},
        {id: 13, name: 'Cempaka Putih', city_id: 2, city_name: 'Jakarta Pusat'},
        {id: 14, name: 'Johar Baru', city_id: 2, city_name: 'Jakarta Pusat'},
        {id: 15, name: 'Kemayoran', city_id: 2, city_name: 'Jakarta Pusat'},
        {id: 16, name: 'Sawah Besar', city_id: 2, city_name: 'Jakarta Pusat'},
        {id: 17, name: 'Kebayoran Baru', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 18, name: 'Kebayoran Lama', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 19, name: 'Pesanggrahan', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 20, name: 'Cilandak', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 21, name: 'Pasar Minggu', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 22, name: 'Jagakarsa', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 23, name: 'Mampang Prapatan', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 24, name: 'Pancoran', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 25, name: 'Tebet', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 26, name: 'Setiabudi', city_id: 3, city_name: 'Jakarta Selatan'},
        {id: 27, name: 'Matraman', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 28, name: 'Pulo Gadung', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 29, name: 'Jatinegara', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 30, name: 'Duren Sawit', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 31, name: 'Kramat Jati', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 32, name: 'Makasar', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 33, name: 'Pasar Rebo', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 34, name: 'Ciracas', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 35, name: 'Cipayung', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 36, name: 'Cakung', city_id: 4, city_name: 'Jakarta Timur'},
        {id: 37, name: 'Koja', city_id: 5, city_name: 'Jakarta Utara'},
        {id: 38, name: 'Kelapa Gading', city_id: 5, city_name: 'Jakarta Utara'},
        {id: 39, name: 'Tanjung Priok', city_id: 5, city_name: 'Jakarta Utara'},
        {id: 40, name: 'Pademangan', city_id: 5, city_name: 'Jakarta Utara'},
        {id: 41, name: 'Penjaringan', city_id: 5, city_name: 'Jakarta Utara'},
        {id: 42, name: 'Cilincing', city_id: 5, city_name: 'Jakarta Utara'},
        {id: 43, name: 'Kepulauan Seribu Utara', city_id: 6, city_name: 'Kepulauan Seribu'},
        {id: 44, name: 'Kepulauan Seribu Selatan', city_id: 6, city_name: 'Kepulauan Seribu'},
        {id: 45, name: 'Rangkasbitung', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 46, name: 'Cibadak', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 47, name: 'Warunggunung', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 48, name: 'Maja', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 49, name: 'Cipanas', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 50, name: 'Muncang', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 51, name: 'Leuwidamar', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 52, name: 'Bojongmanik', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 53, name: 'Cijaku', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 54, name: 'Malingping', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 55, name: 'Panggarangan', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 56, name: 'Bayah', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 57, name: 'Cibeber', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 58, name: 'Gunung Kencana', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 59, name: 'Sajira', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 60, name: 'Cikulur', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 61, name: 'Cileles', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 62, name: 'Cimarga', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 63, name: 'Bajarsari', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 64, name: 'Curugbitung', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 65, name: 'Sobang', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 66, name: 'Wanasalam', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 67, name: 'Cilograng', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 68, name: 'Cirinten', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 69, name: 'Kalanganyar', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 70, name: 'Kecamatan Cigemblong', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 71, name: 'Lebak Gedong', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 72, name: 'Cihara', city_id: 7, city_name: 'Kabupaten Lebak'},
        {id: 73, name: 'Sumur', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 74, name: 'Cimanggu', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 75, name: 'Cibaliung', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 76, name: 'Cibitung', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 77, name: 'Cikeusik', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 78, name: 'Cigeulis', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 79, name: 'Panimbang', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 80, name: 'Sobang', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 81, name: 'Munjul', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 82, name: 'Angsana', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 83, name: 'Sindangresmi', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 84, name: 'Picung', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 85, name: 'Bojong', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 86, name: 'Saketi', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 87, name: 'Cisata', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 88, name: 'Pagelaran', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 89, name: 'Patia', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 90, name: 'Sukaresmi', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 91, name: 'Labuan', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 92, name: 'Carita', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 93, name: 'Jiput', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 94, name: 'Cikedal', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 95, name: 'Menes', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 96, name: 'Pulosari', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 97, name: 'Mandalawangi', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 98, name: 'Cimanuk', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 99, name: 'Cipeucang', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 100, name: 'Banjar', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 101, name: 'Kaduhejo', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 102, name: 'Mekarjaya', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 103, name: 'Pandeglang', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 104, name: 'Majasari', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 105, name: 'Cadasari', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 106, name: 'Karangtanjung', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 107, name: 'Koroncong', city_id: 8, city_name: 'Kabupaten Pandeglang'},
        {id: 108, name: 'Anyer / Anyar', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 109, name: 'Bandung', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 110, name: 'Baros', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 111, name: 'Binuang', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 112, name: 'Bojonegara', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 113, name: 'Carenang', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 114, name: 'Cikande', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 115, name: 'Cikeusal', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 116, name: 'Cinangka', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 117, name: 'Ciomas', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 118, name: 'Ciruas', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 119, name: 'Gunungsari', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 120, name: 'Jawilan', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 121, name: 'Kibin', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 122, name: 'Kopo', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 123, name: 'Kragilan', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 124, name: 'Kramatwatu', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 125, name: 'Mancak', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 126, name: 'Pabuaran', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 127, name: 'Padarincang', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 128, name: 'Pamarayan', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 129, name: 'Petir', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 130, name: 'Pontang', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 131, name: 'Pulo Ampel', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 132, name: 'Tanara', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 133, name: 'Tirtayasa', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 134, name: 'Tunjung Teja', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 135, name: 'Waringin Kurung', city_id: 9, city_name: 'Kabupaten Serang'},
        {id: 136, name: 'Balaraja', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 137, name: 'Cikupa', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 138, name: 'Cisauk', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 139, name: 'Cisoka', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 140, name: 'Curug', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 141, name: 'Gunungkaler', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 142, name: 'Jambe', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 143, name: 'Jayanti', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 144, name: 'Kelapa Dua', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 145, name: 'Kemiri', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 146, name: 'Kosambi', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 147, name: 'Kresek', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 148, name: 'Kronjo', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 149, name: 'Legok', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 150, name: 'Mauk', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 151, name: 'Mekarbaru', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 152, name: 'Pagedangan', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 153, name: 'Pakuhaji', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 154, name: 'Panongan', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 155, name: 'Pasarkemis', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 156, name: 'Rajeg', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 157, name: 'Sepatan', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 158, name: 'Sepatan Timur', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 159, name: 'Sindang Jaya', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 160, name: 'Solear', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 161, name: 'Sukadiri', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 162, name: 'Sukamulya', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 163, name: 'Teluknaga', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 164, name: 'Tigaraksa', city_id: 10, city_name: 'Kabupaten Tangerang'},
        {id: 165, name: 'Cilegon', city_id: 11, city_name: 'Kota Cilegon'},
        {id: 166, name: 'Ciwandan', city_id: 11, city_name: 'Kota Cilegon'},
        {id: 167, name: 'Pulomerak', city_id: 11, city_name: 'Kota Cilegon'},
        {id: 168, name: 'Cibeber', city_id: 11, city_name: 'Kota Cilegon'},
        {id: 169, name: 'Grogol', city_id: 11, city_name: 'Kota Cilegon'},
        {id: 170, name: 'Purwakarta', city_id: 11, city_name: 'Kota Cilegon'},
        {id: 171, name: 'Citangkil', city_id: 11, city_name: 'Kota Cilegon'},
        {id: 172, name: 'Jombang', city_id: 11, city_name: 'Kota Cilegon'},
        {id: 173, name: 'Serang', city_id: 12, city_name: 'Kota Serang'},
        {id: 174, name: 'Cipocok Jaya', city_id: 12, city_name: 'Kota Serang'},
        {id: 175, name: 'Curug', city_id: 12, city_name: 'Kota Serang'},
        {id: 176, name: 'Kasemen', city_id: 12, city_name: 'Kota Serang'},
        {id: 177, name: 'Taktakan', city_id: 12, city_name: 'Kota Serang'},
        {id: 178, name: 'Walantaka', city_id: 12, city_name: 'Kota Serang'},
        {id: 179, name: 'Benda', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 180, name: 'Cibodas', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 181, name: 'Karangtengah', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 182, name: 'Larangan', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 183, name: 'Neglasari', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 184, name: 'Periuk', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 185, name: 'Pinang', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 186, name: 'Batuceper', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 187, name: 'Ciledug', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 188, name: 'Cipondoh', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 189, name: 'Jatiuwung', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 190, name: 'Karawaci', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 191, name: 'Tangerang', city_id: 13, city_name: 'Kota Tangerang'},
        {id: 192, name: 'Ciputat', city_id: 14, city_name: 'Kota Tangerang Selatan'},
        {id: 193, name: 'Ciputat Timur', city_id: 14, city_name: 'Kota Tangerang Selatan'},
        {id: 194, name: 'Pamulang', city_id: 14, city_name: 'Kota Tangerang Selatan'},
        {id: 195, name: 'Pondok Aren', city_id: 14, city_name: 'Kota Tangerang Selatan'},
        {id: 196, name: 'Serpong', city_id: 14, city_name: 'Kota Tangerang Selatan'},
        {id: 197, name: 'Serpong Utara', city_id: 14, city_name: 'Kota Tangerang Selatan'},
        {id: 198, name: 'Setu', city_id: 14, city_name: 'Kota Tangerang Selatan'},
        
    ];
    }

    initializeKlh(){
    this.klhs = [
        {id: 1, name: 'Kedaung Kali Angke', city_id: 1, district_id: 1},
        {id: 2, name: 'Kapuk', city_id: 1, district_id: 1},
        {id: 3, name: 'Tomang', city_id: 1, district_id: 2},
        {id: 4, name: 'Gambir', city_id: 2, district_id: 9},
        {id: 5, name: 'Kebon Kelapa', city_id: 2, district_id: 9},
        {id: 6, name: 'Bendungan Hilir', city_id: 2, district_id: 10},
        {id: 7, name: 'Selong', city_id: 3, district_id: 17},
        {id: 8, name: 'Pondok Bambu', city_id: 4, district_id: 30},
        {id: 9, name: 'Kelapa Gading Barat', city_id: 5, district_id: 38}
    ];
    }

    setDistrictValues(sCity) {
        this.selectedDistricts = this.districts.filter(district => district.city_id == sCity.id)
        console.log('Selected', sCity)
    }

    setKlhValues(sDistrict) {
        this.selectedKlhs = this.klhs.filter(klh => klh.district_id == sDistrict.id);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatnewPage');
  }

}
