import { Subject } from 'rxjs';

const loading = new Subject();

const loaderService = {
	newLoader: () => loading.next(true),
	stopLoader: () => loading.next(false),
	getLoading: () => loading.asObservable()
};

export default loaderService;