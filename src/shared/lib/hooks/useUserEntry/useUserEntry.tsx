import { FIRST_USER_ENTRY } from '@/shared/const';
import { useEffect, useState } from 'react';

interface IUseUserEntry {
	firstEntry: boolean;
}

export const useUserEntry = (): IUseUserEntry => {
	const entry = localStorage.getItem(FIRST_USER_ENTRY);

	const [firstEntry, setFirstEntry] = useState<boolean>(false);

	useEffect(() => {
		if (entry === null) {
			localStorage.setItem(FIRST_USER_ENTRY, JSON.stringify(true));
			setFirstEntry(true);
		} else if (entry === 'true') {
			localStorage.setItem(FIRST_USER_ENTRY, JSON.stringify(false));
			setFirstEntry(false);
		} else {
			localStorage.setItem(FIRST_USER_ENTRY, JSON.stringify(false));
			setFirstEntry(false);
		}
	}, []);

	return { firstEntry };
};
