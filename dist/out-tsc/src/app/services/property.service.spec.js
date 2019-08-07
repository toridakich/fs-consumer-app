import { TestBed } from '@angular/core/testing';
import { PropertyService } from './property.service';
describe('PropertyService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PropertyService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=property.service.spec.js.map