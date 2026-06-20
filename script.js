
$(document).ready(function() {
    // 1. DATA TABLES
    $('.js-datatable').DataTable({
        responsive: true,
        pageLength: 5,
        lengthMenu: [5, 10, 25]
    });

    // 2. TOGGLE SEMBUNYI/MUNCULKAN SIDEBAR
    $('#sidebarCollapse').on('click', function() {
        if (window.innerWidth >= 1024) {
            $('#sidebar').toggleClass('-translate-x-full');
            $('#mainContent').toggleClass('lg:pl-64');
        } else {
            $('#sidebar').removeClass('-translate-x-full');
            $('#sidebarOverlay').removeClass('hidden');
        }
    });

    $('#sidebarClose, #sidebarOverlay').on('click', function() {
        $('#sidebar').addClass('-translate-x-full');
        $('#sidebarOverlay').addClass('hidden');
    });

    // 3. SINGLE PAGE ROUTING ENGINE (TAB SWITCH)
    $('.tab-link').on('click', function(e) {
        e.preventDefault();
        const targetTab = $(this).data('tab');

        // Update Active Menu Styling (Gradient Effects)
        $('.tab-link').removeClass('bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-md font-medium').addClass('text-slate-700 hover:bg-slate-200/60 hover:text-blue-900');
        $(this).addClass('bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-md font-medium').removeClass('text-slate-700 hover:bg-slate-200/60 hover:text-blue-900');

        // Switch Page View
        $('.tab-pane').addClass('hidden');
        $(`#page-${targetTab}`).removeClass('hidden');

        if (window.innerWidth < 1024) {
            $('#sidebar').addClass('-translate-x-full');
            $('#sidebarOverlay').addClass('hidden');
        }
    });

    // Responsive Window Synchronization
    $(window).on('resize', function() {
        if (window.innerWidth >= 1024) {
            $('#sidebar').removeClass('-translate-x-full');
            $('#sidebarOverlay').addClass('hidden');
            $('#mainContent').addClass('lg:pl-64');
        } else {
            $('#sidebar').addClass('-translate-x-full');
            $('#mainContent').removeClass('lg:pl-64');
        }
    });
    $(window).trigger('resize');

    // 4. USER PROFILE DROPDOWN
    $('#userMenuBtn').on('click', function(e) {
        e.stopPropagation();
        $('#userDropdown').toggleClass('hidden');
    });
    $(document).on('click', function() {
        $('#userDropdown').addClass('hidden');
    });

    // 5. CHART CONFIGURATIONS (Untuk Halaman Analytic)
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
            datasets: [{
                label: 'Omset (€)',
                data: [22000, 31000, 45000, 39000, 62000, 84000],
                borderColor: '#1d4ed8',
                backgroundColor: 'rgba(29, 78, 216, 0.05)',
                tension: 0.4,
                fill: true,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Mode & Luxury', 'Kosmetik', 'Kuliner & Wine'],
            datasets: [{
                data: [55, 25, 20],
                backgroundColor: ['#1d4ed8', '#f1f5f9', '#b91c1c']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
