import { TestBed } from '@angular/core/testing';

import { IndustryCountsService } from './industry-counts.service';

describe('IndustryCountsService', () => {
    let service: IndustryCountsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(IndustryCountsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});