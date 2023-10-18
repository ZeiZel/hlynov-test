import { useState, useEffect } from 'react';
import { FIRST_USER_ENTRY } from '@/shared/const';

export const useUserEntry = () => {
	const [firstEntry, setFirstEntry] = useState<boolean>(
		!!JSON.parse(localStorage.getItem(FIRST_USER_ENTRY) ?? 'true'),
	);

	useEffect(() => {
		const storedValue = localStorage.getItem(FIRST_USER_ENTRY);
		if (!storedValue) {
			localStorage.setItem(FIRST_USER_ENTRY, 'true');
			setFirstEntry(true);
		} else {
			localStorage.setItem(FIRST_USER_ENTRY, 'false');
			setFirstEntry(false);
		}
	}, [firstEntry]);

	return { firstEntry };
};
