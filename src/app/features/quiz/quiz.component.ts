import { Component, inject } from '@angular/core';
import { BusyComponent } from "../../components/busy/busy.component";
import { FlagComponent } from '../../components/flag/flag.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { SharedModule } from '../../shared.module';
import { AppStore } from '../../store/app.store';
import { DoneComponent } from './components/done/done.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { QuizStore } from './store/quiz.store';

@Component({
  selector: 'app-quiz-page',
  imports: [
    SharedModule,
    QuestionPresenterComponent,
    ToolbarComponent,
    ProgressComponent,
    DoneComponent,
    FlagComponent,
    BusyComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export default class QuizPageComponent {
  readonly appStore = inject(AppStore);
  readonly store = inject(QuizStore);

}
