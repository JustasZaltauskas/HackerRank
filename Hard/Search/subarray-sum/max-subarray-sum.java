static long maximumSum(Long[] a, Long m) {
        TreeSet<Long> tree = new TreeSet<Long>();
        Long[] prefix = new Long[a.length];
        Long sum = a[0];
        prefix[0] = sum % m;
        Long max = prefix[0];
        tree.add(prefix[0]);
        
        for (int i = 1; i < a.length; i++) {
            sum += a[i];
            prefix[i] = sum % m;
            Long firstMaxVal = tree.ceiling(prefix[i]);
            firstMaxVal = firstMaxVal == null ? 0 : firstMaxVal;
            max = Math.max(max, (prefix[i] - firstMaxVal + m) % m);
            tree.add(prefix[i]);
        }

        return max;
    }