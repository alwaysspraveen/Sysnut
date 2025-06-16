import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { App } from './app';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [App],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({}), // mock route parameters
          queryParams: of({}), // mock query parameters
          snapshot: { data: {} }, // mock route snapshot
        },
      },
    ],
  }).compileComponents();
});
