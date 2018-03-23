import { OnInit, Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import {ClientProvider} from '../../providers/client/client';
import {ClientModel} from '../../models/client.model';

/**
 * Generated class for the SiteEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-site-edit',
  templateUrl: 'site-edit.html',
})
export class SiteEditPage extends ProtectedPage implements OnInit{
  private clientData: FormGroup;
  private myData: any;
  private client : ClientModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,
    public formBuilder: FormBuilder,
    public clientProvider: ClientProvider) {

       super(navCtrl, navParams, storage);  
       console.log(this.client);
       this.clientData = this.formBuilder.group({
      'product_name': [this.client.project_name],
      'name': [this.client.name],
      'phone': [this.client.phone],
      'email': [this.client.email],
      'price': [this.client.price],
      'url': [this.client.url],
      'key':[this.client.name]
    }); 
      
  }

  ngOnInit(): any {      
    
  }

  onSubmit(clientData) {    
    this.myData = clientData;    
    let updateClient = Object.assign(this.client, this.myData.value);
    this.clientProvider.update(updateClient)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("add book error", e));
  }


}
