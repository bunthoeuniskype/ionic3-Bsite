import { OnInit, Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ClientProvider} from '../../providers/client/client';
/**
 * Generated class for the SiteAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-site-add',
  templateUrl: 'site-add.html',
})
export class SiteAddPage extends ProtectedPage implements OnInit{

  private clientData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,
    public formBuilder: FormBuilder,
    public clientProvider: ClientProvider) {

       super(navCtrl, navParams, storage);   
      
  }

  ngOnInit(): any {      
    this.clientData = this.formBuilder.group({
      'product_name': [''],
      'name': [''],
      'phone': [''],
      'email': [''],
      'price': [''],
      'url': [''],
      'key':['']
    });
  }

  onSubmit(clientData) {    
    this.clientData = clientData;
    this.clientProvider.add(this.clientData.value)
      .then(() => this.navCtrl.push('SiteInfoPage'))
      .catch((e) => console.log("add site error", e));
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SiteAddPage');
  // }

}
