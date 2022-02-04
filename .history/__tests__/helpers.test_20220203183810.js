test('format_date() returns a date string', () => {
    const date = new Date('2022-02-03 16:12:03');
  
    expect(format_date(date)).toBe('2/3/2022');
  });

  