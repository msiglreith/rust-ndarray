(function() {var implementors = {};
implementors["ndarray"] = ["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.SubAssign.html\" title=\"trait core::ops::SubAssign\">SubAssign</a> for <a class=\"struct\" href=\"ndarray/struct.Dim.html\" title=\"struct ndarray::Dim\">Dim</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"ndarray/struct.Dim.html\" title=\"struct ndarray::Dim\">Dim</a>&lt;I&gt;: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>","impl&lt;'a, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.SubAssign.html\" title=\"trait core::ops::SubAssign\">SubAssign</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.Dim.html\" title=\"struct ndarray::Dim\">Dim</a>&lt;I&gt;&gt; for <a class=\"struct\" href=\"ndarray/struct.Dim.html\" title=\"struct ndarray::Dim\">Dim</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"ndarray/struct.Dim.html\" title=\"struct ndarray::Dim\">Dim</a>&lt;I&gt;: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.SubAssign.html\" title=\"trait core::ops::SubAssign\">SubAssign</a>&lt;<a class=\"type\" href=\"ndarray/type.Ix.html\" title=\"type ndarray::Ix\">Ix</a>&gt; for <a class=\"struct\" href=\"ndarray/struct.Dim.html\" title=\"struct ndarray::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a><a class=\"type\" href=\"ndarray/type.Ix.html\" title=\"type ndarray::Ix\">Ix</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 1]</a>&gt;","impl&lt;'a, A, S, S2, D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.SubAssign.html\" title=\"trait core::ops::SubAssign\">SubAssign</a>&lt;&amp;'a <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S2, E&gt;&gt; for <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.SubAssign.html\" title=\"trait core::ops::SubAssign\">SubAssign</a>&lt;A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>&lt;Elem = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class=\"trait\" href=\"ndarray/trait.Data.html\" title=\"trait ndarray::Data\">Data</a>&lt;Elem = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>","impl&lt;A, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.SubAssign.html\" title=\"trait core::ops::SubAssign\">SubAssign</a>&lt;A&gt; for <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"ndarray/trait.ScalarOperand.html\" title=\"trait ndarray::ScalarOperand\">ScalarOperand</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.SubAssign.html\" title=\"trait core::ops::SubAssign\">SubAssign</a>&lt;A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"ndarray/trait.DataMut.html\" title=\"trait ndarray::DataMut\">DataMut</a>&lt;Elem = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()