test('format_date() returns a date string', () => {
    const date = new Date('2022-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
  });