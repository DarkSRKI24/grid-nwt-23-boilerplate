import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  weatherCity: string = 'Novi Sad';
  weatherTemperature: number = 25;
  weatherHumidity: number = 50;
  weatherWind: number = 10;
  weatherClouds: number = 12;
  weatherLink = 'https://www.accuweather.com/en/rs/novi-sad/298486/weather-forecast/298486';

  carManufacturer: string = 'Mitsubishi Motors';
  carModel: string = 'Mitsubishi Lancer Evolution X';
  carMotorVolume: string = '1998cc';
  carDoors: number = 4;
  carFuleType: string = 'Petrol';
  carFuleUsage: string = '8.3 l/100 km 28.34 US mpg 34.03 UK mpg 12.05 km/l';
  carLink: string = 'https://i.pinimg.com/originals/af/50/2f/af502f32ddcaa67eea868e346561eb9c.jpg';

  phoneManufacturer: string = 'Google';
  phoneModel: string = 'Pixel 7';
  phoneColor: string[] = ['Lemongrass', ' Snow', ' Obsidian'];
  phoneScreen: Array<string> = ['1080 x 2400', ' OLED', ' 90'];
  phoneRAM: number = 8;
  phoneStorage: string = '128 GB / 256 GB';
  phoneProcessor: string = 'Google Tensor G2';
  phoneCameras: string = '50 MP Octa PD Quad Bayer';
  phoneOS: string = 'Android 13';
  phoneBatteryCapacity: number = 4355;
  phoneLink: string = 'https://chromeunboxed.com/wp-content/uploads/2022/06/Pixel7ProGoogleLeakCulture.jpg?ezimgfmt=ng%3Awebp%2Fngcb92%2Frs%3Adevice%2Frscb93-1';

}
