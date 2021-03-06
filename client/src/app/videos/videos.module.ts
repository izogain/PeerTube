import { NgModule } from '@angular/core'
import { SharedModule } from '../shared'
import { VideoSearchComponent } from './video-list'
import { VideoRecentlyAddedComponent } from './video-list/video-recently-added.component'
import { VideoTrendingComponent } from './video-list/video-trending.component'
import { VideosRoutingModule } from './videos-routing.module'
import { VideosComponent } from './videos.component'

@NgModule({
  imports: [
    VideosRoutingModule,
    SharedModule
  ],

  declarations: [
    VideosComponent,

    VideoTrendingComponent,
    VideoRecentlyAddedComponent,
    VideoSearchComponent
  ],

  exports: [
    VideosComponent
  ],

  providers: []
})
export class VideosModule { }
