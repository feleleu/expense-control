import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { TRANSLATE_CONFIG } from "./ngx-translate.configuration";

@NgModule({
  imports: [HttpClientModule, TranslateModule.forRoot(TRANSLATE_CONFIG)],
  providers: [TranslateService],
})
export class LanguageModule {}
