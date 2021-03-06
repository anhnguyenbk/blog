import {HttpModule, Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {CommentsController} from "./comments.controller";
import {CommentsService} from "./comments.service";
import {WebConfigService} from "../config/webconfig.service";
import {BlogService} from "../common/rest.service";

@Module({
    imports: [HttpModule, ConfigModule.forRoot()],
    controllers: [CommentsController],
    providers: [CommentsService, WebConfigService, BlogService],
    exports: [CommentsService],
})

export class CommentsModule {
}
