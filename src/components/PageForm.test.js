import { fireEvent, render, wait } from '@testing-library/react';
import React from 'react';
import PageForm from './PageForm';

test('renders page table', async () => {
    const { findByText, findByPlaceholderText } = render(<PageForm />);
    const submit = await findByText('Submit');
    const reset = await findByText('Reset');
    expect(submit).toBeInTheDocument();
    expect(reset).toBeInTheDocument();
    fireEvent.click(submit);
    await wait(async () => {
        const id = await findByPlaceholderText('Page ID');
        expect(id.value).toBe("1")
    });
});