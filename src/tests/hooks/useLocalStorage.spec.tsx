import { useLocalStorage } from '@/hooks/useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should set and get item from localStorage', () => {
    const key = 'testKey';
    const { setItem, getItem } = useLocalStorage(key);
    const value = { foo: 'bar' };
    setItem(value);

    expect(getItem()).toEqual(value);
  });

  it('should remove item from localStorage', () => {
    const key = 'testKey';
    const { setItem, getItem, removeItem } = useLocalStorage(key);
    const value = { foo: 'bar' };
    setItem(value);

    expect(getItem()).toEqual(value);

    removeItem();

    expect(getItem()).toBeUndefined();
  });
});