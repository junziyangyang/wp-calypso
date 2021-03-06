/**
 * External dependencies
 */
import { useEffect, DependencyList } from 'react';

/**
 * Internal dependencies
 */
import { useOnUnmount } from './use-on-unmount';
import { recordEnterModal, recordCloseModal } from '../lib/analytics';

/**
 * Records events in tracks on opening and closing the modal
 * When closing the modal, additional properties can be recorded e.g. which domain was selected.
 *
 * @param modalName The name of the modal as will be sent to tracks
 * @param eventProperties Additional properties to be recorded on completing the modal
 * @param deps Dependencies as will be passeed into react's useEffect
 */
export function useTrackModal( modalName: string, eventProperties?: any, deps?: DependencyList ) {
	useOnUnmount( () => {
		recordCloseModal( modalName, eventProperties );
	}, deps || [] );
	useEffect( () => {
		recordEnterModal( modalName );
	}, [] );
}
