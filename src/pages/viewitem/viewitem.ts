import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pasienbaru } from '../../models/todo';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { PatoldPage } from '../patold/patold';
import { EditprofilePage } from '../editprofile/editprofile';
import firebase from 'firebase';

/**
 * Generated class for the ViewitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewitem',
  templateUrl: 'viewitem.html',
})
export class ViewitemPage {

  user : pasienbaru;
  appointList: FirebaseListObservable<any>;
  appointment = {
    name: '',
    myDate:'',
    almt:'',
    no:'',
    gr:'',
    o_n:'',
    spl:'',
    dr:'',
    tgl:'',
    status:'',
    cek:''
  };
  userid:string;

  private todo : FormGroup;
  selectedDoctor: { id: number; name: string; spls_id: number; spls_name: string; }[];
  spls: { id: number; name: string; }[];
  drs: { id: number; name: string; spls_id: number; spls_name: string; }[];

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, 
    private formBuilder: FormBuilder, public toastCtrl: ToastController) {
    this.initializeSpl();
    this.initializeDr();
    //this.appointList = db.list('/appointment')
    this.todo = this.formBuilder.group({
      gr: ['', Validators.required],
      o_n:['', Validators.required],
      spl:['', Validators.required],
      dr:['', Validators.required],
      tgl:['', Validators.required],
      status:[],
      cek:[]
    });
    this.userid = fire.auth.currentUser.uid;
  }

  ionViewWillLoad() {
    this.user = this.navParams.get('user');
  }

  createAppoint(name,myDate,almt,no,gr,o_n,spl,dr,tgl,status){
    this.fire.authState.take(1).subscribe(auth => {
      this.db.list(`/appointment/${auth.uid}`).push({
        name : name,
        myDate : myDate,
        almt : almt,
        no : no,
        gr : gr,
        o_n : o_n,
        spl : spl,
        dr : dr,
        tgl : tgl
      }).then(newAppoint => {
        this.navCtrl.push(PatoldPage)
      },error=>{console.log(error);})
    })

    this.db.list(`/adminList/`).push({
      name : name,
      myDate : myDate,
      almt : almt,
      no : no,
      gr : gr,
      o_n : o_n,
      spl : spl,
      dr : dr,
      tgl : tgl,
      status : '0',
      uid : this.userid
    }).then(newAppoint => {
      console.log(newAppoint);
    },error=>{console.log(error);});
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Your Appointment Succesfully Submit',
      duration: 2500,
      position: position
    });

    toast.present(toast);
  }

  initializeSpl(){
    this.spls = [
        {id: 1, name: 'Spesialis Anak'},
        {id: 2, name: 'Spesialis Mata'},
        {id: 3, name: 'Spesialis Kulit & Kelamin'},
        {id: 4, name: 'Spesialis THT'},
        {id: 5, name: 'Spesialis Kandungan & Kebidanan'},
        {id: 6, name: 'Spesialis Penyakit Dalam'},
        {id: 7, name: 'Spesialis Paru'},
        {id: 8, name: 'Spesialis Orthopedi'},
        {id: 9, name: 'Spesialis Syaraf'},
        {id: 10, name: 'Spesialis Bedah'},
        {id: 11, name: 'Spesialis Gigi'},
        {id: 12, name: 'Spesialis Umum'},
        {id: 13, name: 'Rehab Medik'}
    ];
  }

  initializeDr(){
    this.drs = [
        {id: 1, name: 'DR.dr. Soedjatmiko, Sp.A (K), Msi', spls_id: 1, spls_name: 'Spesialis Anak'},
        {id: 2, name: 'dr. Budi Yudono, Sp.A', spls_id: 1, spls_name: 'Spesialis Anak'},
        {id: 3, name: 'dr. Siti Rozanah, Sp.A', spls_id: 1, spls_name: 'Spesialis Anak'},
        {id: 4, name: 'dr. Djundu’ah, Sp.A', spls_id: 1, spls_name: 'Spesialis Anak'},
        {id: 5, name: 'dr. Etty Christiati, Sp.A', spls_id: 1, spls_name: 'Spesialis Anak'},
        {id: 6, name: 'dr. Masyitha, Sp.A', spls_id: 1, spls_name: 'Spesialis Anak'},
        {id: 7, name: 'dr. Donny Ronaldo, Sp.A', spls_id: 1, spls_name: 'Spesialis Anak'},
        {id: 8, name: 'dr. Melisa Lilisari, Sp.A', spls_id: 1, spls_name: 'Spesialis Anak'},
        {id: 9, name: 'dr. Elisabeth Srisubekti, Sp.M', spls_id: 2, spls_name: 'Spesialis Mata'},
        {id: 10, name: 'dr. Putri Ramadhani L,Sp.KK', spls_id: 3, spls_name: 'Spesialis Kulit & Kelamin'},
        {id: 11, name: 'dr. Rahmatina, Sp.KK', spls_id: 3, spls_name: 'Spesialis Kulit & Kelamin'},
        {id: 12, name: 'dr. Adila Hisyam, Sp.THT', spls_id: 4, spls_name: 'Spesialis THT'},
        {id: 13, name: 'dr. Farid Azis, Sp.THT', spls_id: 4, spls_name: 'Spesialis THT'},
        {id: 14, name: 'dr. Taufik Zain, Sp.OG (K)', spls_id: 5, spls_name: 'JSpesialis Kandungan & Kebidanan'},
        {id: 15, name: 'dr. Tety Ernawati, Sp.OG', spls_id: 5, spls_name: 'Spesialis Kandungan & Kebidanan'},
        {id: 16, name: 'dr. M. Rejani, Sp.OG', spls_id: 5, spls_name: 'Spesialis Kandungan & Kebidanan'},
        {id: 17, name: 'dr. Neni Anggraini, Sp.OG', spls_id: 5, spls_name: 'Spesialis Kandungan & Kebidanan'},
        {id: 18, name: 'dr. Khaira Utia Yusrie, Sp.PD', spls_id: 6, spls_name: 'Spesialis Penyakit Dalam'},
        {id: 19, name: 'dr. E. Mudjaddid, Sp.PD-Kpsi', spls_id: 6, spls_name: 'Spesialis Penyakit Dalam'},
        {id: 20, name: 'dr. Tito Ardi Suwandoko, Sp.PD, FINASIM', spls_id: 6, spls_name: 'Spesialis Penyakit Dalam'},
        {id: 21, name: 'dr. Yenni Sari Siregar, Sp.P', spls_id: 7, spls_name: 'Spesialis Paru'},
        {id: 22, name: 'dr. Mukhtar Ikhsan, Sp.P(K), MARS', spls_id: 7, spls_name: 'Spesialis Paru'},
        {id: 23, name: 'dr. Iin Rahmania Inayatillah, Sp.P', spls_id: 7, spls_name: 'Spesialis Paru'},
        {id: 24, name: 'dr. A. Arya Abikara, Sp.OT', spls_id: 8, spls_name: 'Spesialis Orthopedi'},
        {id: 25, name: 'dr. Hastari Soekardi, Sp.S', spls_id: 9, spls_name: 'Spesialis Syaraf'},
        {id: 26, name: 'dr. Fitriani Nasution, Sp.S', spls_id: 9, spls_name: 'Spesialis Syaraf'},
        {id: 27, name: 'dr. Herry Wardani, Sp.B', spls_id: 10, spls_name: 'Spesialis Bedah'},
        {id: 28, name: 'dr. Ibadurahman, Sp.B', spls_id: 10, spls_name: 'Spesialis Bedah'},
        {id: 29, name: 'drg. Jenni. B.Ultrisza', spls_id: 11, spls_name: 'Spesialis Gigi'},
        {id: 30, name: 'drg. Vastya Ihsani, Sp.KG', spls_id: 11, spls_name: 'Spesialis Gigi'},
        {id: 31, name: 'drg. Erry', spls_id: 11, spls_name: 'Spesialis Gigi'},
        {id: 32, name: 'drg. Sri Junani RS', spls_id: 11, spls_name: 'Spesialis Gigi'},
        {id: 33, name: 'drg. Esti Puspita Sari', spls_id: 11, spls_name: 'Spesialis Gigi'},
        {id: 34, name: 'drg. Fiqqa Hendrayekti', spls_id: 11, spls_name: 'Spesialis Gigi'},
        {id: 35, name: 'drg. Saka Setiono Nugroho, Sp.BM', spls_id: 11, spls_name: 'Spesialis Gigi'},
        {id: 36, name: 'drg. Anastasia Ririen Pramudyawati', spls_id: 11, spls_name: 'Spesialis Gigi'},
        {id: 37, name: 'Dokter Spesialis Umum', spls_id: 12, spls_name: 'Spesialis Umum'},
        {id: 38, name: 'dr. Agus Prasetyo, Sp.KFR', spls_id: 8, spls_name: 'Rehab Medik'},
    ]
  }

  setDoctorValues(spl){
    this.selectedDoctor = this.drs.filter(dr => dr.spls_id == spl.id)
  }

  gotoEditpage(){
    console.log("edit page");
    this.navCtrl.push(EditprofilePage)
  }

  logForm(){
    console.log(this.todo.value)
  }

}
