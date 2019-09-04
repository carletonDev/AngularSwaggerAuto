import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CharactersService } from './api/characters.service';
import { ClassesService } from './api/classes.service';
import { MyCharactersService } from './api/myCharacters.service';
import { UsersService } from './api/users.service';
import { ValuesService } from './api/values.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CharactersService,
    ClassesService,
    MyCharactersService,
    UsersService,
    ValuesService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
