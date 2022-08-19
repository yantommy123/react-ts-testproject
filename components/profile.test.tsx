import {Profile} from './profile';
import {render} from '@testing-library/react';

describe('profile', () => {
    it("display name", () => {
        const {container} = render(<Profile {.. {name: 'Tommy', company: 'CTS'}} />);
        
    });
});