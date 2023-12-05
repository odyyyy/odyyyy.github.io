document.addEventListener('DOMContentLoaded', function () {
    var parallaxSection = document.getElementById('parallaxSection');

    function handleScroll() {
      var scrollPosition = window.scrollY;
      parallaxSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    }

    // ���������� ������� ���������
    window.addEventListener('scroll', handleScroll);

    // �������� ���������� ������� ��������� ��� �������� �������� (���� ��������� ��������� �� � ����� �����)
    handleScroll();
  });