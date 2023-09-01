import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';
import { NoModalCompComponent } from './no-modal-comp.component';
import { IMyModel } from 'src/app/dto/imymodel';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoModalModule } from '../no-modal.module';

describe('NoModalCompComponent', () => {
  const myModel: IMyModel = {
    code: 99,
    displayName: 'Test User',
    email: 'test-user@gmail.com',
    phoneNumber: '123-456-7891'
  };
  let component: NoModalCompComponent;
  let fixture: ComponentFixture<NoModalCompComponent>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ IonicModule.forRoot(), NoModalModule],
      providers: [{provide: NavParams, useValue: new NavParams({ myModel })}]
    }).compileComponents();

    fixture = TestBed.createComponent(NoModalCompComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    // fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('**should display name from navparams**', () => {
    fixture.detectChanges();
    const el = debugElement.query(By.css('[data-testid="mymodel-name"]'));
    expect(el.nativeElement.textContent).toEqual(myModel.displayName);
  });
});
