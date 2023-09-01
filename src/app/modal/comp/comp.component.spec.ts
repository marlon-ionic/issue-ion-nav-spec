import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonNav, IonicModule, NavParams } from '@ionic/angular';
import { CompComponent } from './comp.component';
import { ModalModule } from '../modal.module';
import { IMyModel } from 'src/app/dto/imymodel';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CompComponent', () => {
  let component: CompComponent;
  let fixture: ComponentFixture<CompComponent>;
  let debugElement: DebugElement;
  const myModel: IMyModel = {
    code: 99,
    displayName: 'Test User',
    email: 'test-user@gmail.com',
    phoneNumber: '123-456-7891'
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ModalModule],
      providers: [
        IonNav,
        {provide: NavParams, useValue: new NavParams({ myModel })}]
    }).compileComponents();

    fixture = TestBed.createComponent(CompComponent);
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
